//__node libraby responsible for sending the emails__ 
const nodemailer = require("nodemailer");

//__Node mailer configuration for the SMTP server responsible for the sending process__
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'nikolas.mohr@ethereal.email',
        pass: '5TBKnZ7s9bxM1hTRbC'
    }
});

export default async function sendEmail({ from, to, subject, text }) {

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

//__Error Handling
sendEmail().catch(console.error);