# Shop-TS
This project is an e-commerce web application built using TypeScript, json-server, and Vite. The application features a client-side interface for users to browse products, manage a shopping cart, and place orders. On the admin side, there’s an interface for managing orders and tracking their status. The application focuses on strong data validation and type safety to ensure robustness and clarity.

## Features

Client-Side

1. **User Registration**: Allows users to create an account.
2. **User Login**: Provides a secure login system for registered users.
3. **Product List**: Displays a list of products available for purchase.
4. **Shopping Cart**: Stores the selected products for purchase.
5. **Order Creation**: Enables users to place an order based on their cart.
6. **Order History**: Displays a history of all orders placed by the user.
7. **Filtering Options**: Filter products by category, price, and availability.
8. **Sorting Capabilities**: Sort products by name and price in ascending or descending order.
9. **Responsive Design**: User-friendly interface compatible with various devices and screen size

Admin-Side 

1. **Order Management**: Admins can view all customer orders.
2. **Order Status Update**: Admins can change the order status (e.g., "In preparation," "Shipped," "Delivered," "Returned").

## Technical Details

- Backend:  json-server simulates a REST API to store and retrieve product, user, and order data.
- Frontend: TypeScript is used for strict type safety and validation, ensuring data integrity and minimizing errors.
- Separation of Client and Admin: The client-side and admin-side interfaces are separated by index.html (for users) and admin.html (for admins), ensuring clear boundaries between the two sections.

## Validation & Types

- Data Validation: All user inputs and API interactions are validated to ensure consistency and security.
- Types: TypeScript is used throughout the project, with types defined for users, products, and orders to prevent incorrect data from being passed around.


## Installation
To run this project locally, follow these steps:

1. **Clone the Repository**  

   Run the following command to clone the repository and navigate into the project directory:  

   ```bash
   git clone https://github.com/AgnieszkaDra/shop-TS
   

2. **Install Dependencies**  

   Make sure you have [Node.js](https://nodejs.org/) installed, then run the following command:  

   ```bash
   npm install


3. **Start the development server**:

    Start the application locally by running:

    ```bash
    npm start and open all endpoints
    npm run dev

4. Open your browser and navigate to http://localhost:3000/index.html to view the client-side interface, or http://localhost:3000/admin.html for the admin interface.

## Technologies Used

1. **TypeScript** – Provides static typing for improved code quality.  
2. **Vite** – Bundles the project files for deployment.  
3. **json-server** – simulate REST API.  

