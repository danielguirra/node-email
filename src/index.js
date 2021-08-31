var nodemailer = require('nodemailer');
require('dotenv')
let password = process.env.pass
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your@gmail.com', //Change this to your gmail email
        pass: password
    }
});

let send = () => {
    var mailOptions = {
        from: 'your@gmail.com', //Change this to your gmail email
        to: 'your@gmail.com',
        subject: 'subject',
        text: 'teste'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email Sent!');
        }
    })
}
send()