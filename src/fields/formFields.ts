import { InputField } from '../types/InputField';

const formFields: InputField[] = [
  { category: 'register', type: 'text', label: 'Name and Surname', name: 'name', placeholder: 'Enter your name', required: true },
  {
    category: 'register',
    type: "number",
    name:"day",
    min: 1 ,
    max: 31,
    required: true,
    label: "Date of Birth",
    placeholder: "Enter the day of your birth"
  },
  {
    category: 'register',
    type: "select",
    name: "month",
    options: [
      { label: "January", value: "1" },
      { label: "February", value: "2" },
      { label: "March", value: "3" },
      { label: "April", value: "4" },
      { label: "May", value: "5" },
      { label: "June", value: "6" },
      { label: "July", value: "7" },
      { label: "August", value: "8" },
      { label: "September", value: "9" },
      { label: "October", value: "10" },
      { label: "November", value: "11" },
      { label: "December", value: "12" }
    ],
    required: true,
  },
  {
    category: 'register' ,
    type: "number",
    name:"year",
    min: 1800 ,
    max: 2024,
    required: true,
    placeholder: "Enter the year of your birth"
  },
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