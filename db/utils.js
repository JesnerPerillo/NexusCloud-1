import { createTransport } from "nodemailer";

import dotenv from "dotenv";

dotenv.config();

const transport = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_CODE,
    },
})
    const pendingEmail = (name, course) => {
        return `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h1 style="color: #007bff;">Hello, ${name}!</h1>
            <p style="font-size: 16px;">You transaction is currently being proccessed for<strong style="color: #28a745;">${course}</strong>.</p>
            <p>The admin is cusrrently looking t o verify your transaction. We will get back to you as soon as possible If you have any questions, feel free to reach out.</p>
            <hr style="border: 0; height: 1px; background: #ddd;">
            <p style="font-size: 14px; color: #777;">Best regards,<br> NexusCloud IT Solutions</p>
        </div>`;
    };

    const generateEmail = (email, name, course) => {
        return `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
            <h1 style="color: #007bff;">Hello, ${email},!</h1>
            <p style="font-size: 16px;">You have been successfully enrolled in <strong style="color: #28a745;">${course}</strong>.</p>
            <p>We are excited to have you in the class. If you have any questions, feel free to reach out.</p>
            <hr style="border: 0; height: 1px; background: #ddd;">
            <p style="font-size: 14px; color: #777;">Best regards,<br> NexusCloud IT Solutions</p>
        </div>`;
    };


function sendEmail(to, name, course) {
    
const htmlemail = pendingEmail(name, course);
    transport.sendMail({
        from: process.env.EMAIL_USER,
        to, 
        subject: `Enrollment Confirmation`,
        html: htmlemail
    }, (err, info) => {
        if (err) {
            console.log(`Error in sending email
            ${err}`);
        }    
        console.log(info);
    })
}

export default sendEmail;