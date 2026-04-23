# ProjectFlow 🚀
### *Empowering Teams with Seamless Task Orchestration*

**ProjectFlow** is a premium, full-stack enterprise task management application designed to streamline project workflows and enhance team productivity. Built with the modern MERN stack, it offers a robust solution for both administrators and team members to manage tasks, track progress through visual analytics, and generate detailed professional reports.

---

## 📸 Project Showcase

<div align="center">
  <img src="./Screenshots/Screenshot 2026-04-23 175817.png" alt="Admin Dashboard" width="800"/>
  <p><i>Figure 1: Admin Dashboard with Visual Analytics</i></p>
</div>

<div align="center">
  <img src="./Screenshots/Screenshot 2026-04-23 175930.png" alt="Task Management" width="800"/>
  <p><i>Figure 2: Advanced Task Management System</i></p>
</div>

<div align="center">
  <div style="display: flex; justify-content: center; gap: 10px;">
    <img src="./Screenshots/Screenshot 2026-04-23 180003.png" alt="Login Page" width="395"/>
    <img src="./Screenshots/Screenshot 2026-04-23 180428.png" alt="User Dashboard" width="395"/>
  </div>
  <p><i>Figure 3: Secure Authentication & User-Specific Views</i></p>
</div>

---

## ✨ Key Features

### 🔐 Advanced Authentication & RBAC
- **Secure Access**: JWT-based authentication with cookie-based session management.
- **Dual Roles**: Tailored experiences for **Admins** (Management) and **Users** (Execution).
- **Admin Join Code**: Restricted admin registration via private invitation tokens.

### 📊 Powerful Dashboards
- **Visual Analytics**: Real-time task distribution and priority level charts using **Recharts**.
- **Status Tracking**: Monitor tasks through 'Pending', 'In Progress', and 'Completed' states.
- **Team Overview**: Admins can manage the entire team and their respective workloads.

### 📝 Comprehensive Task Management
- **Full CRUD**: Create, assign, update, and delete tasks with ease.
- **Detailed Tracking**: Set due dates, priorities, and descriptions.
- **Search & Filter**: Quickly find tasks or users within the system.

### 📁 Enterprise Reporting
- **Excel Export**: Generate professional task and user activity reports using **ExcelJS**.
- **Data-Driven Insights**: Downloadable summaries of team performance and task completion rates.

### ☁️ Cloud Integration
- **Image Storage**: Seamless profile picture management powered by **Cloudinary**.
- **Production Ready**: Ephemeral-safe storage for all user-uploaded assets.

---

## 🛠️ Technology Stack

### Frontend
- **React.js**: Modern component-based UI.
- **Redux Toolkit**: Centralized state management.
- **Tailwind CSS v4**: Cutting-edge, high-performance styling.
- **Recharts**: Interactive data visualization.
- **React Router**: Seamless single-page navigation.

### Backend
- **Node.js & Express**: High-performance API server.
- **MongoDB & Mongoose**: Flexible NoSQL data storage.
- **JWT & Cookies**: Secure, stateless authentication.
- **Cloudinary**: Scalable cloud asset management.
- **Multer**: Robust file handling middleware.
- **ExcelJS**: Professional spreadsheet generation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account
- Cloudinary Account

### 1. Clone the Repository
```bash
git clone https://github.com/Adarsh09675/Task-Manager-Project.git
cd Task-Manager-Project
```

### 2. Backend Configuration
Create a `.env` file in the `backend` directory:
```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
ADMIN_JOIN_CODE=admin123
FRONT_END_URL=http://localhost:5173

# Cloudinary Config
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=project_flow_uploads
```

### 3. Frontend Configuration
Create a `.env` file in the `frontend` directory:
```env
VITE_BASE_URL=http://localhost:3000/api
```

### 4. Run the Application
```bash
# In backend directory
npm install
npm run dev

# In frontend directory
npm install
npm run dev
```

---

## 📝 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Made with ❤️ by Adarsh
</div>
