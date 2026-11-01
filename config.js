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
    PUBLIC_KEY: "",     // ตัวอย่าง: "user_xxxxxx"
    SERVICE_ID: "",     // ตัวอย่าง: "service_xxxxxx"
    TEMPLATE_ID: ""     // ตัวอย่าง: "template_xxxxxx"
};

// 2. FIREBASE CLOUD CONFIGURATION (สำหรับซิงค์ข้อมูล Real-Time ข้ามเครื่อง PC/มือถือ)
// สมัครและสร้าง Project ฟรีได้ที่ https://console.firebase.google.com
window.FIREBASE_CONFIG = {
    apiKey: "demo-key",
    authDomain: "demo-project.firebaseapp.com",
    projectId: "demo-project",
    storageBucket: "demo-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};

// 3. INITIAL ADMIN EMAIL (อีเมลผู้ดูแลระบบเริ่มต้นสำหรับล็อกอินครั้งแรก)
window.DEFAULT_ADMIN_EMAIL = "admin@company.com";
