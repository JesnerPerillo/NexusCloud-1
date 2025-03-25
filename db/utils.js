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
const pendingEmail = (name, course) => `
<div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #007bff;">Hello, ${name}!</h1>
    <p style="font-size: 16px;">Your transaction is currently being processed for <strong style="color: #28a745;">${course}</strong>.</p>
    <p>The admin is currently verifying your transaction. We will get back to you as soon as possible. If you have any questions, feel free to reach out.</p>
    <hr style="border: 0; height: 1px; background: #ddd;">
    <p style="font-size: 14px; color: #777;">Best regards,<br> NexusCloud IT Solutions</p>
</div>
`;

const successEmail = (name, course) => `
<div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
    <h1 style="color: #007bff;">Hello, ${name}!</h1>
    <p style="font-size: 16px;">You have been successfully enrolled in <strong style="color: #28a745;">${course}</strong>.</p>
    <p>We are excited to have you in the class. If you have any questions, feel free to reach out.</p>
    <hr style="border: 0; height: 1px; background: #ddd;">
    <p style="font-size: 14px; color: #777;">Best regards,<br> NexusCloud IT Solutions</p>
</div>
`;

const sendEmail = async (to, name, course, type = 'pending') => {
try {
    const htmlEmail = type === 'success' ? successEmail(name, course) : pendingEmail(name, course);

    // const transporter = createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.EMAIL_USER,
    //         pass: process.env.EMAIL_PASS,
    //     },
    // });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: type === 'success' ? 'Enrollment Successful' : 'Enrollment Pending Verification',
        html: htmlEmail,
    };

    const info = await transport.sendMail(mailOptions);
    console.log('Email sent:', info.response);
} catch (error) {
    console.error('Error sending email:', error);
}
};
export default sendEmail;