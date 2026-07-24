# 🏡 HouseAI - Machine Learning Web Integration

> A learning project demonstrating how to integrate a Machine Learning model into a modern React web application.

---

## 📖 About

HouseAI is a practice project built to understand the complete workflow of integrating a trained Machine Learning model with a responsive web application.

The project focuses on connecting a modern frontend with a backend prediction API to provide real-time house price predictions.

---

## 🎯 Learning Objectives

- ✅ Build a modern React frontend
- ✅ Design a responsive UI with Tailwind CSS
- ✅ Integrate a Machine Learning model with a web application
- ✅ Connect frontend and backend using REST APIs
- ✅ Send user input to the backend
- ✅ Receive real-time prediction results
- ✅ Understand the ML deployment workflow

---

## 🏗️ Architecture

```text
                    User
                      │
                      ▼
          React + TypeScript Frontend
                      │
              HTTP Request (REST API)
                      │
                      ▼
            Node.js + Express Backend
                      │
                      ▼
        Python Machine Learning Service
                      │
                      ▼
      Trained Scikit-Learn Model (.pkl)
                      │
                      ▼
            Predicted House Price
                      │
                      ▼
                Frontend Result
```

---

## 🚀 Tech Stack

### Frontend

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🌐 Axios

### Backend

- 🟢 Node.js
- 🚂 Express.js

### Machine Learning

- 🐍 Python
- 🤖 Scikit-learn
- 💾 Joblib

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   └── prediction/
├── pages/
├── services/
├── hooks/
├── utils/
├── constants/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

---

## 🔄 Prediction Flow

```text
Property Details
        │
        ▼
Frontend Form
        │
        ▼
API Request
        │
        ▼
Backend Server
        │
        ▼
Machine Learning Model
        │
        ▼
Predicted Price
        │
        ▼
Display Result
```

---

## ✨ Features

- 🏡 House price prediction interface
- 📱 Mobile-first responsive design
- 🎨 Modern glassmorphism UI
- ⚡ Fast React application
- 🔗 Backend-ready architecture
- 🤖 Machine Learning integration workflow

---

## ▶️ Getting Started

### Clone Repository

```bash
git clone <repository-url>
cd houseai
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## 📚 What I Learned

- Machine Learning model deployment workflow
- Frontend and backend communication
- REST API integration
- React application architecture
- Responsive UI development
- Preparing frontend for AI-powered applications
- Integrating a trained Scikit-learn model with a web application

---

## 👨‍💻 Author

**Ramit Shapkota**

Computer Engineering Student | MERN Stack Developer | Machine Learning Enthusiast