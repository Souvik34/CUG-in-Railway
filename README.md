# CUG Management System

This project implements a CUG (Closed User Group) management system using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to create, manage, and view CUG groups for discounted or free calls and SMS within a group.

## Features:

- Create new CUG groups
- View a list of existing CUG groups with details
- Manage CUG group members (add, remove)
- User-friendly interface built with React 

## Tech Stack:

- Frontend: React (with optional UI library like Material-UI or Bootstrap)
- Backend: Node.js, Express.js
- Database: MongoDB (with Mongoose ODM)


## Installation:

Clone this repository:

```

git clone https://github.com/<your-username>/cug-management-system.git
```

Install dependencies:

```

cd cug-management-system
npm install
```

## Running the Application:

Start the backend server:

```

npm run server-start (or a similar script defined in your package.json)
```

Start the React development server:

```

npm run start (or a similar script defined in your package.json)
```

This will usually start the application at http://localhost:3000/ (adjust the port if necessary).

## Functions:

#Create New CUG Group
- File: client/src/components/CUGGroupForm.js
- Description: This function allows users to create a new CUG group by providing a group name and description.
- API Endpoint: POST /api/cug-groups
- Request Body: { name: string, description: string }
- Response: 201 Created with the newly created CUG group ID






