# UCC Student Assistant System

> Deprecated Version

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-blue?logo=bootstrap&logoColor=white)

---

## About

A website for keeping attendance tracking for students.

---

## Table of Contents

- [Requirements](#requirements)
- [Features](#features)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## REQUIREMENTS

To run this project locally, ensure you have the following installed:

- Node.js
- npm or yarn
- A modern browser 
- Web server
- Any Database Access (This is built with SQL)

---

## Features

- Secure login for administrators and teachers
- Real-time attendance logging to the database
- Admin dashboard for student and log management

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/JohnIvn/UCC-SAS.git
```

### 2. Install Dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

Integrator

```bash
cd integrator
npm install
```

### 3. Configure Environment
Create a .env file in the root directory and add your configuration:

Backend

```bash
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
DB_TIMEZONE=
JWT_SECRET=
DEFAULT_USER_ROLE=
DEFAULT_STAFF_ROLE=

INTEGRATOR_API_URL=
```

Integrator

```bash
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
DB_TIMEZONE=
```

### 4. Run the App

npm
```bash
   cd backend
   npm run backend

   cd frontend
   npm run frontend

   cd integrator
   npm run integrator
```
yarn
```bash
   cd backend
   yarn backend

   cd frontend
   yarn frontend

   cd integrator
   yarn integrator
```
---

## Technologies-Used

| Category | Tools                      |
| -------- | -------------------------- |
| Frontend | React JS, Boostrap, HTML5  |
| Backend  | Node JS                    |
| Database | MYSQL & MSSQL              |

---

## Testing

Once everything is set up and the server is running, you can test simply by going to the url.

---

## License

See the [LICENSE](LICENSE) file for more information.

---

> Built with ❤️ by JohnIvn
