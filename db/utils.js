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

const htmlemail = `
    <div>
        <h1>Hello</h1>
    </div>`


function sendEmail(to, subject) {
    transport.sendMail({
        from: process.env.EMAIL_USER,
        to, 
        subject,
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