import { InputField } from "../types/InputField";
import validateForm from "./validateForm";

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

    type User = { id: string, name: string, day: string, month: string, year: string, email: string, password: string };

    async function request<T>(url: string, options?: RequestInit): Promise<T> {
      const resp = await fetch(url, options);
      if (!resp.ok) throw new Error(`Error: ${resp.status}`);
      return await resp.json();
    }

    const url = "http://localhost:5000/users";

    if (type === "register") {
      try {
        const body = formData;
        const data = await request<User>(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        console.log("User registered:", data);
      } catch (err) {
        console.error("Registration Error:", err);
      }
    }

    if (type === "login") {
      try {
        const users = await request<User[]>(url);
        const user = users.find(
          (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          console.log("User logged in:", user);
        } else {
          console.error("Invalid email or password.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
};
