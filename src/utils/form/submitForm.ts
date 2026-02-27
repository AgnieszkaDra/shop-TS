import { InputField } from "../../types/InputField";
import { BACK_END_URL } from "../../constants/api";
import validateForm from "./validateForm";
import { User } from "../../types/User";
import loggedUser from "../../api/loggedUser";

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password); 
  const hashBuffer = await crypto.subtle.digest("SHA-256", data); 
  const hashArray = Array.from(new Uint8Array(hashBuffer)); 
  return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join(""); 
}

export const submitForm = (form: HTMLFormElement, inputs: InputField[], type: 'register' | 'login'): void => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData: Record<string, string | number> = {};

    inputs.forEach((element) => {
      const input = form.querySelector(`[name=${element.name}]`);
      if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
        formData[element.name] = input.value;
      }
    });

    const errors = await validateForm(inputs, formData, form);
   
    if (errors.length > 0) {
      console.error("Form validation failed.");
      return;
    }

    if ("password" in formData) {
      formData.password = await hashPassword(formData.password as string);
    }

    async function request<T>(url: string, options?: RequestInit): Promise<T> {
      const resp = await fetch(url, options);
      if (!resp.ok) throw new Error(`Error: ${resp.status}`);
      return await resp.json();
    }

    const url = `${BACK_END_URL}/users`;

    if (type === "register") {
      try {
        const body = formData;
        await request<User>(url, { // ta data nie jest używana dlaczego?
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
      
      } catch (err) {
        console.error("Registration Error:", err);
      }
    }

    // if (type === "login") {
    //   try {
    //     const users = await request<User[]>(url);
    //     const user = users.find(
    //       (u) => u.email === formData.email && u.password === formData.password
    //     );

    //     if (user) {
    //     const updatedUsers = await loggedUser(user);
    //     updatedUsers.forEach(updatedUser => {
    //       console.log(updatedUser.name);
    //     });
    //     } else {
    //       console.error("Login failed: User not found.");
    //     }
    //   } catch (err) {
    //     console.error("Login Error:", err);
    //   }
    // }
    if (type === "login") {
      try {
        const users = await request<User[]>(url);
        const user = users.find(
          (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          const updatedUser = await loggedUser(user);
          
         
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));

        } else {
          console.error("Login failed: User not found.");
        }
      } catch (err) {
        console.error("Login Error:", err);
      }
    }
  });
};
