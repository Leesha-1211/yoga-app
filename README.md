## YOGA WEBSITE

### FrontEnd part of the website:
Frontend folder contains Admissionform.css,Admissionform.jsx,app.css,app.jsx,index.js.
This React application consists of two components: App and AdmissionForm. The App component renders a background with a philosophical paragraph about yoga and includes the AdmissionForm component. The AdmissionForm component is a form where users can input their name, age, and select a yoga class batch. It performs basic client-side validation and makes an asynchronous POST request to a local server endpoint using Axios when the form is submitted. The server simulates a payment process, and the response is displayed as the payment status. Additionally, the form triggers toast notifications for successful or failed payments using the React Toastify library. The components are styled with CSS to create a visually appealing and user-friendly interface.

### BackEnd part of the website:
## Features

- **Feature 1:**
Payment Service Logic: The CompletePayment function in paymentService.js simulates payment processing. It logs payment details, generates a random success/failure outcome, and returns a corresponding message.
- **Feature 2:**
Express Server Setup: The Express server is set up in app.js with middleware for CORS and JSON body parsing.
- **Feature 3:**
Enrollment Endpoint: There's a POST endpoint at /api/enroll to handle enrollment requests from the React front-end. It extracts name, age, and selectedBatch from the request body.
- **Feature 4:**
Enrollment Processing: The server can perform custom enrollment logic (not specified in this code) and then calls CompletePayment to simulate payment processing.
- **Feature 5:**
Response to Front-end: The server responds to the front-end with a JSON object containing a message based on the payment simulation outcome.
- **Feature 6:**
Error Handling: Errors during enrollment or payment processing are logged, and appropriate error messages are sent to the front-end.
- **Feature 7:**
Server Start: The server listens on port 3001, and a message is logged upon successful start.
- **Feature 8:**
Vercel Configuration: The vercel.json file specifies the build and deployment configuration for Vercel, ensuring that all JavaScript files are handled by the @vercel/node runtime.
- **Feature 9:**
Wildcard Route: The Vercel configuration includes a wildcard route to redirect all routes to the root, simplifying deployment for a single-page application.
- **Feature 10:**
Overall Purpose: This backend serves as a mock server for handling enrollment and payment simulation for a React application, providing a foundation for further development and integration with a real payment gateway in a production environment.

## E-R Diagram
![E-R Diagram](https://github.com/Leesha-1211/yoga-app/assets/120728017/4d647052-00ce-4a00-8b0b-25b9406813b3)

## Implementation
npm install.  

npm install express body-parser.

npm install cors.

npm install axios.

Terminal1  - node server.js.

Terminal2 - npm run dev

## Create a Database
Use your database credentials in  user: "root",

  password: "1234", 
  
In MySQL 

"CREATE DATABASE yoga_class;

USE yoga_class;

CREATE TABLE enrollments (

  id INT AUTO_INCREMENT PRIMARY KEY,
  
  name VARCHAR(255) NOT NULL,
  
  
  age INT NOT NULL,
  
  selectedBatch VARCHAR(255) NOT NULL,
  
  paymentStatus VARCHAR(255) NOT NULL
  
  
);
" 
## MYSQL Demo
![MYSQL](https://github.com/Leesha-1211/yoga-app/assets/120728017/63cb786a-f1fd-49bc-89c1-f9fa09806f11)


