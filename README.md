# 📋 Job Application Tracker

A high-performance, responsive full-stack **Job Application Tracker** designed to keep your software engineering pipelines completely organized. 

This repository is optimized for quick hosting and features a zero-setup local sandbox environment as well as a full MERN backend!

### 🔗 [Live Demo](https://snehasanu64.github.io/Job_Application_Tracker/)

---

## 🎨 Premium Features
*   **Visual Pipeline Analytics**: Live, auto-calculating status board showing Applied, Interview, Offer, and Rejected application counts.
*   **Smart Forms**: Form validations and automatic date detection that defaults the applied date to today's local date.
*   **Responsive Dark Mode**: High-end glassmorphic interfaces designed using modern Syne & DM Sans typography.
*   **Dual-mode Engine**: Instant frontend simulation via local storage sandbox, with hooks ready for an Express server.

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 🚀 How to Run Locally

### 1. Instant Demo (No Installation)
Just open `index.html` in any browser! Or run a local lightweight server:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000/index.html`

### 2. Live Database Server (Node.js + MongoDB)
To connect a local MongoDB database and run the full server:
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root folder:
   ```env
   MONGO_URI=mongodb://localhost:27017/job_tracker
   PORT=5000
   ```
3. Run the server:
   ```bash
   node server.js
   ```

---

Built by [Sneha](https://github.com/snehasanu64)
