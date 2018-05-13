const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */


/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */


express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  //Routes
  .get('/', (req, res) => res.render('pages/index'))
  .get('/company', (req, res) => res.render('pages/company'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .post('/send',(req,res) => sendEmail(req, res))

  //Listener
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



  'use strict';
  const nodemailer = require('nodemailer');

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'smart.farmslk@gmail.com',
               pass: 'smartfarmslk'
           }
      });



      sendEmail = function(req, res) {

        //create email
        var createEmail = 'User: ' + req.body.inquiry.designation + ' ' + req.body.inquiry.firstname + ' ' + req.body.inquiry.surname +
        ' Company: ' + req.body.inquiry.company + ' Email: ' + req.body.inquiry.email + ' Number: ' + req.body.inquiry.number + ' ' +
        'Inquiry: ' + req.body.inquiry.message;

        var createEmailHTML = '<p> User: ' + req.body.inquiry.designation + ' ' + req.body.inquiry.firstname + ' ' + req.body.inquiry.surname +
        ' <br/><br/>Company: ' + req.body.inquiry.company +
        ' <br/><br/>Email: ' + req.body.inquiry.email +
        ' <br/><br/>Number: ' + req.body.inquiry.number +
        ' <br/><br/>Inquiry: ' + req.body.inquiry.message + '</p>';

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Smart Farms" <no-reply@smartfarmslk.com>', // sender address
            to: 'smart.farmslk@gmail.com', // list of receivers
            subject: 'An inquiry has been posted on Smartfarms.com', // Subject line
            text: createEmail, // plain text body
            html: createEmailHTML // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            //Redirect to success page
            res.render('pages/contact')

        });
      }

  });
