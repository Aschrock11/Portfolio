// import nodemailer from 'nodemailer';
// export default async function ContactAPI(req, res) {
//   const { name, email, message } = req.body;
//   const data = {
//     name,
//     email,
//     message,
//   };
//   const user = process.env.USER;

//   const transporter = nodemailer.createTransport({
//     host: 'smpt.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.USER,
//       pass: process.env.PASS,
//     },
//   });

//   try {
//     const mail = await transporter.sendMail({
//       from: user,
//       to: 'schrockadam1@gmail.com',
//       replyTo: email,
//       subject: `contact form submission from ${name}`,
//       html: `
//       <p>Name: ${name}<p/>
//       <p>Email: ${email}<p/>
//       <p>Message: ${message}<p/>
//       `,
//     });

//     console.log('message sent:', mail.messageId);
//   } catch (error) {
//     console.log(error);
//     res
//       .status(500)
//       .json({ message: 'could not send the email your message was not sent' });
//   }

//   return res.status(200).json({ message: 'success' });
// }
