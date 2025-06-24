# 🛒 Tech Deal

Live Site 👉 [https://tech-deal.netlify.app/](https://tech-deal.netlify.app/)

## 📚 Project Purpose
**Tech Deal** is an e-commerce-style website designed to showcase and sell tech gadgets.  
It provides users with an intuitive interface to browse services, register/login (including Google login), view service details, and manage their profiles securely using Firebase authentication.

## 🚀 Live URL
🌐 **[Visit Tech Deal](https://tech-deal.netlify.app/)**

---

## 🌟 Key Features

- 🔐 **User Authentication**
  - Email/password login & register
  - Google authentication
  - Password reset feature

- 🛡️ **Protected Routes**
  - Service details & profile pages are secured for authenticated users only

- 📨 **Password Recovery**
  - Users can reset their passwords with a password reset email

- 📝 **Terms & Privacy**
  - Terms & Conditions and Privacy Policy pages for legal compliance

- 🌐 **Responsive Design**
  - Mobile-friendly and desktop-ready UI built with **Tailwind CSS** and **DaisyUI**

- 🎉 **Toast Notifications**
  - Real-time feedback using `react-toastify` for errors and successes

- 🎠 **Swiper.js Sliders**
  - Smooth and responsive sliders for showcasing deals and offers

- ⚡ **SEO Ready**
  - Dynamic page titles using `react-helmet-async`

---

## 📦 Packages & Dependencies Used

| Package             | Version   | Purpose                         |
| --------------------|-----------|----------------------------------|
| **react**           | ^19.0.0   | Frontend library                 |
| **react-dom**       | ^19.0.0   | DOM rendering                    |
| **react-router**    | ^7.5.3    | Routing & navigation             |
| **firebase**        | ^11.6.1   | Authentication & backend         |
| **react-toastify**  | ^11.0.5   | Toast notifications              |
| **swiper**          | ^11.2.6   | Sliders & carousels              |
| **tailwindcss**     | ^4.1.5    | Utility-first CSS framework      |
| **@tailwindcss/vite**| ^4.1.5   | Tailwind integration with Vite   |
| **react-helmet-async**| ^2.0.5 | SEO and dynamic meta tags        |
| **react-icons**     | ^5.5.0    | Icon library                     |

---

## 💻 Tech Stack

- **React** (Frontend library)
- **Firebase Auth** (User authentication)
- **Tailwind CSS + DaisyUI** (Styling)
- **Vite** (Fast development build tool)
- **Netlify** (Deployment)

---

🛠️ How to Run Locally
To run Tech Deal on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/ibrahim3761/Tech-Deal.git
   cd tech-deal


2. Install dependencies::
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. Configure Firebase:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. Run locally:
    ```bash
    npm run dev

---

## Fix Client-Side Routing (React Router)
    If using React Router, add a _redirects file in your public/ folder:
    ```bash
    /*    /index.html   200

---

## 🚀 Deployment Steps to Firebase

1. Login to Firebase CLI (if not already):
    ```bash
    npm install -g firebase-tools
    firebase login

2. Initialize Firebase in your project:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. Build your React app:
    ```bash
    npm run build

4. Deploy to Firebase:
    ```bash
    firebase deploy

---