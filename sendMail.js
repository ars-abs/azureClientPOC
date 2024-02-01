require('isomorphic-fetch');

const { peek } = require('@laufire/utils/debug');
const azureClient = require("./azureClient");

const sendMail = {
  message: {
    subject: 'Meet for lunch?',
    body: {
      contentType: 'Text',
      content: 'The new cafeteria is open.'
    },
    toRecipients: [
      {
        emailAddress: {
          address: 'rahimcsestudies@gmail.com'
        }
      }
    ]
  },
  saveToSentItems: 'false'
};

// 'POST /me/sendMail
// POST /users/{id | userPrincipalName}/sendMail'
const userId = "a9bd345b-16fb-4741-8535-4d3a622fa69f";

(async ()=>{
  azureClient.api(`/users/${userId}/sendMail`).post(sendMail)
})()

