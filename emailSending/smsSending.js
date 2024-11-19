const twilio = require('twilio');
const crypto = require('crypto')

// Your Twilio Account SID and Auth Token
const accountSid = 'AC78aeb0893b9747611c57c4f8d9b9d76c';  // Replace with your Account SID
const authToken = 'fc29ca402c700da58eb0f6fea0a6b208';    // Replace with your Auth Token

// Initialize Twilio client
const client = twilio(accountSid, authToken);


function generateOTP(length) {
    const otp = crypto.randomBytes(length).toString('hex');  // Generate a hex string
    const numericOTP = otp.replace(/[^\d]/g, '');  // Remove non-numeric characters

    // If the OTP is not long enough, repeat the process
    if (numericOTP.length < length) {
        return generateNumericOTP(length);  // Recursively generate until the length is satisfied
    }

    return numericOTP.slice(0, length);

}// Return the OTP of the desired length

const otp1 = generateOTP(6)

// Send SMS
client.messages.create({
    body: `Your OTP is ${otp1}`, // Message body
    from: '+16468461656',  // Your Twilio phone number (must be a Twilio number)
    to: '+916374111455'     // Recipient phone number (should include country code)
})
    .then(message => {
        console.log('Message sent successfully:', message.sid);
    })
    .catch(error => {
        console.log('Error:', error);
    });
