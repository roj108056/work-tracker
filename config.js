/**
 * ====================================================================
 *  WORK TRACKER - SYSTEM CONFIGURATION FILE (ไฟล์ตั้งค่าระบบ)
 * ====================================================================
 *  ไฟล์นี้ใช้สำหรับจัดเก็บค่า Key และการตั้งค่าระบบแยกต่างหาก
 *  เมื่อมีการอัปเดตโค้ดโปรแกรมหลัก (index.html) ค่าการตั้งค่าในไฟล์นี้จะไม่ถูกลบหรือกระทบกระเทือน
 */

// 1. EMAILJS CONFIGURATION (สำหรับส่งรหัส OTP เข้า Email จริง)
// สมัครและรับ Key ฟรีได้ที่ https://www.emailjs.com
window.EMAIL_CONFIG = {
    PUBLIC_KEY: "ukHYpgmI8c8OKaLTt",     // ตัวอย่าง: "user_xxxxxx"
    SERVICE_ID: "service_s5q2ub8",     // ตัวอย่าง: "service_xxxxxx"
    TEMPLATE_ID: "template_k5k5jd9"     // ตัวอย่าง: "template_xxxxxx"
};

// 2. FIREBASE CLOUD CONFIGURATION (สำหรับซิงค์ข้อมูล Real-Time ข้ามเครื่อง PC/มือถือ)
// สมัครและสร้าง Project ฟรีได้ที่ https://console.firebase.google.com
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBShn2wogMPPruVAJ4-0mmFAou7WTDh5eY",
  authDomain: "rojtracking.firebaseapp.com",
  projectId: "rojtracking",
  storageBucket: "rojtracking.firebasestorage.app",
  messagingSenderId: "182736124270",
  appId: "1:182736124270:web:a581a1d3615360f845697f"
};

// 3. INITIAL ADMIN EMAIL (อีเมลผู้ดูแลระบบเริ่มต้นสำหรับล็อกอินครั้งแรก)
window.DEFAULT_ADMIN_EMAIL = "roj.108056@gmail.com";
