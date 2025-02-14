import { BACK_END_URL } from "../constants/api";
import { User } from '../types/User';

  export async function loggedUser(user: User): Promise<User[]> {
    const updatedUser = { ...user, lastLogin: new Date().toISOString() }
    const response =  await fetch(`${BACK_END_URL}/loggedUser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    
    const data = await response.json();
    const loggedUser: User[] = data; 

    return loggedUser;
  }
  
  export default loggedUser;
  
