const validateEmail = require('./validates/emails').validateEmail
const validatePassword = require('./validates/passwords').validatePassword
const generatePassword = require('./validates/passwords').generatePassword
const MyMoment = require('./validates/dates')

module.exports = {
  validateEmail,
  validatePassword,
  generatePassword,
  MyMoment
}
