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

1.Clone the repository:
```bash
git clone https://github.com/ibrahim3761/Tech-Deal.git
cd Tech-Deal

2.Install dependencies:
Install all required packages using npm:
npm install

3.Configure Firebase:

Create a Firebase project and enable Email/Password and Google authentication.

Then, create a .env file in the root directory with the following variables:


VITE_apiKey = AIzaSyDSCSVQWKjACvqymTRY3JnFk2HyPnRXp0g 
VITE_authDomain = tech-deal-69971.firebaseapp.com 
VITE_projectId = tech-deal-69971 
VITE_storageBucket = tech-deal-69971.firebasestorage.app 
VITE_messagingSenderId = 234583114185 
VITE_appId = 1:234583114185:web:a499ab29fefd9f095a6818 
🔒 Note: Make sure not to expose your .env file in public repositories. For production, consider using environment secrets.

4.Start the development server:
Launch the app locally:
npm run dev
