// script.js - بسيط جدًا: يطبع رسالة في console عند إرسال الفورم
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            // سيُرسل فعليًا إلى Formspree لأن action في الفورم موجود
            // هنا فقط نعطي تنبيه بسيط للمستخدم
            alert('Form submitted — check your email (if configured).');
        });
    }
});