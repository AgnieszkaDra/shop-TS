import { InputField } from '../types/InputField';

const formFields: InputField[] = [
  { category: 'register', type: 'text', label: 'Name and Surname', name: 'name', placeholder: 'Enter your name', required: true },
  {
    category: 'register',
    type: "email",
    name: "email",
    required: true,
    label: "Email Address",
    placeholder: "Enter your email",
  },
  {
    category: 'login',
    type: "email",
    name: "email",
    required: true,
    label: "Email Address",
    placeholder: "Enter your email",
  },
  {
    category: 'register',
    type: "password",  
    name: "password", 
    required: true,
    label: "Password",  
    placeholder: "Enter your password",  
  },
  {
    category: 'login',
    type: "password",  
    name: "password", 
    required: true,
    label: "Password",  
    placeholder: "Enter your password",  
  }

  
];

export default formFields;