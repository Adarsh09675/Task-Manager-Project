# ProjectFlow 🚀
### *The Ultimate Enterprise-Grade Task Orchestration System*

**ProjectFlow** is a premium, high-performance task management ecosystem built with the MERN stack. It provides a sophisticated solution for teams to manage complex workflows, track progress with real-time analytics, and generate professional data reports. Whether you are an administrator managing a large team or a member focused on execution, ProjectFlow provides the tools you need to stay productive.

---

## ✨ Key Features

### 🔐 Secure Authentication & Access Control
- **Advanced JWT Auth**: Secure session management using JSON Web Tokens and HTTP-only cookies.
- **Dual Role Architecture**: 
  - **Admins**: Full oversight of users, tasks, and analytics.
  - **Team Members**: Focused views for personal task management.
- **Admin Join Code**: Restricted administrative registration via secure invitation tokens.

### 📊 Real-time Data Visualization
- **Analytical Dashboards**: Interactive Pie and Bar charts powered by **Recharts**.
- **Live Status Monitoring**: Immediate visual feedback on task distribution (Pending, In Progress, Completed).
- **Priority Heatmaps**: Quick identification of high-priority bottlenecks.

### 📝 Robust Task Management
- **Full CRUD Operations**: Create, assign, update, and delete tasks seamlessly.
- **Interactive Checklists**: Breakdown tasks into manageable sub-steps with live progress tracking.
- **Smart Assignment**: Assign tasks to multiple team members with a streamlined selection interface.

### 📁 Enterprise Reporting & Cloud Storage
- **Excel Report Engine**: Export comprehensive task and user performance reports using **ExcelJS**.
- **Cloudinary Integration**: Production-ready, secure cloud storage for user profile images.
- **Persistent Assets**: Never lose data due to ephemeral storage limitations.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, Redux Toolkit, Tailwind CSS v4, Recharts, React Router, Axios |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT, Multer |
| **Cloud/Tools** | Cloudinary (Image Storage), ExcelJS (Reporting), bcryptjs (Security) |

---

## 🚀 Installation & Setup

Follow these precise steps to get your local development environment running perfectly.

### 1. Clone the Repository
```bash
git clone https://github.com/Adarsh09675/Task-Manager-Project.git
cd Task-Manager-Project
```

### 2. Backend Configuration
**Terminal 1:**
```bash
cd backend
npm install
```
Create a `.env` file in the `/backend` folder and populate it:
```env
PORT=3000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
ADMIN_JOIN_CODE=admin123
FRONT_END_URL=http://localhost:5173

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=project_flow_uploads
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Configuration
**Terminal 2:**
```bash
cd frontend
npm install
```
Create a `.env` file in the `/frontend` folder:
```env
VITE_BASE_URL=http://localhost:3000/api
```
Start the frontend development server:
```bash
npm run dev
```

---

## 🖼️ Project Walkthrough (Screenshots)

### 1️⃣ Authentication Flow
<div align="center">
  <table style="width: 100%">
    <tr>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 175817.png" width="100%"/><br/><b>Login Page</b></td>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 175916.png" width="100%"/><br/><b>User Signup</b></td>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 175930.png" width="100%"/><br/><b>Admin Registration</b></td>
    </tr>
  </table>
</div>

### 2️⃣ Administrative Management
<div align="center">
  <table style="width: 100%">
    <tr>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180003.png" width="100%"/><br/><b>Admin Dashboard Overview</b></td>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180545.png" width="100%"/><br/><b>Real-time Analytics Charts</b></td>
    </tr>
    <tr>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180456.png" width="100%"/><br/><b>Create Task Interface</b></td>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180428.png" width="100%"/><br/><b>Team Member Assignment</b></td>
    </tr>
  </table>
</div>

### 3️⃣ Reporting & Team Views
<div align="center">
  <table style="width: 100%">
    <tr>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180509.png" width="100%"/><br/><b>Team Members Directory</b></td>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180530.png" width="100%"/><br/><b>Excel Report Generation</b></td>
    </tr>
  </table>
</div>

### 4️⃣ Team Member Experience
<div align="center">
  <table style="width: 100%">
    <tr>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 180615.png" width="100%"/><br/><b>User Dashboard</b></td>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 180628.png" width="100%"/><br/><b>My Tasks List</b></td>
      <td width="33%"><img src="./Screenshots/Screenshot 2026-04-23 180653.png" width="100%"/><br/><b>Task Details View</b></td>
    </tr>
  </table>
</div>

### 5️⃣ Task Execution Lifecycle
<div align="center">
  <table style="width: 100%">
    <tr>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180701.png" width="100%"/><br/><b>Checklist Progress Update</b></td>
      <td width="50%"><img src="./Screenshots/Screenshot 2026-04-23 180716.png" width="100%"/><br/><b>Final Task Completion</b></td>
    </tr>
  </table>
</div>

---

<div align="center">
  Made with ❤️ by Adarsh
</div>
