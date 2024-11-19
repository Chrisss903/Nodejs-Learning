const nodemailer = require('nodemailer')

// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "30d95f6faf5544",
        pass: "e332005c4dcef8"
    }
});

const mailOptions = {
    from: '21cs010@nandhaengg.org',
    to: '21cs010@nandhaengg.org',
    subject: 'This is a sample mail from nodeJs',
    text: 'Hi , this is the example for sendiong the mail to the mails using nodeJs'
}

var i = 1;

while (i != 10) {

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error: ', error);
        }
        console.log('Email sent: ' + info.response);
    });

    i++;
}