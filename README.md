# 🏡 CareNest – A Donation Platform for Food & Clothes

CareNest is a full-stack web application built to connect donors and receivers for essential items like food and clothing. The platform also includes a secure admin dashboard for monitoring and managing all donation and receive requests.


## 🧩 Features

### 👤 User Functionality
- Sign up / Login as a user
- Donate Food / Clothes
- Request to Receive Food / Clothes
- View real-time submission feedback

### 🛡️ Admin Functionality
- Secure Admin Login (Only `admin@carenest.com`)
- View all donation/receive requests
- Mark requests as **Completed / Pending**
- Delete unwanted or spam entries

---

## 🛠️ Tech Stack

| Layer     | Tech Used                    |
|-----------|------------------------------|
| Frontend  | React.js, Axios, CSS         |
| Backend   | Spring Boot, Maven, REST API |
| Database  | MySQL (PlanetScale / XAMPP)  |


---

## 🗂️ Project Structure

     CareNest/
       ├── client/ # React frontend
       │ └── src/
       │ └── components/
       │ └── pages/
       ├── server/ # Spring Boot backend
       │ └── src/main/java/com/carenest/
       │ └── controllers/
       │ └── models/
       │ └── repositories/
       │ └── services/
       ├── README.md


## 📦 Setup Instructions

### 🔧 Clone & Setup

    git clone https://github.com/imridd/CareNest.git
cd CareNest
###  🖥️ Frontend (client)
     cd client
     npm install
     npm start
## ⚙️ Backend (server)
     cd server
     ./mvnw spring-boot:run
Make sure your application.properties is configured with MySQL credentials.

##   🔐 Admin Credentials
     Email: admin@carenest.com
     Password: your_admin_password (set in backend)

##   ✨ Contributors
     Ridha R. (imridd) — Full Stack Developer

##  📝 License
     This project is open-source and free to use under the MIT License.

## 💡 Future Improvements
         Email verification
         Admin notifications
         Analytics for donation trends


