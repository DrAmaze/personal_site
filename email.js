var email = require('emailjs');
let contact = Document.getElementById['contact-form'];
console.log(contact);

var server = email.server.connect({
  user: 'nodejsiscool@gmail.com',
  password: 'stackoverflow',
  host: 'smtp.gmail.com',
  ssl: true
});

email.server.send({
  name: contact['name'],
  from: contact['email'],
  subject: contact['message']
}, function (err, message) {
  console.log(err || message);
});
