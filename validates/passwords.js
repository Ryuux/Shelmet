function validatePassword (password, minLength = 8, maxLength = 50, commonPasswords = []) {
  const uppercaseRegex = /[A-Z]/
  const lowercaseRegex = /[a-z]/
  const digitRegex = /\d/
  const spaceRegex = /\s/

  if (password.length < minLength || password.length > maxLength) {
    return false
  }

  if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password) || spaceRegex.test(password)) {
    return false
  }

  if (commonPasswords.includes(password.toLowerCase())) {
    return false
  }

  return true
}

function generatePassword (length = 12) {
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
  const digitChars = '0123456789'
  const specialChars = '!@#$%^&*()_-+={}[]|\\:;"<>,.?/'

  let allChars = lowercaseChars + digitChars
  allChars += uppercaseChars + specialChars

  const generateRandomChar = () => {
    const randomIndex = Math.floor(Math.random() * allChars.length)
    return allChars[randomIndex]
  }

  let password = Array.from({ length }, generateRandomChar).join('')

  while (!isComplexEnough(password)) {
    password = Array.from({ length }, generateRandomChar).join('')
  }

  return password
}

function isComplexEnough (password) {
  const uppercaseRegex = /[A-Z]/
  const lowercaseRegex = /[a-z]/
  const digitRegex = /\d/
  const specialRegex = /[!@#$%^&*()_\-+={}[\]|\\:;"<>,.?/]/

  if (password.length < 8) {
    return false
  }

  if (!uppercaseRegex.test(password) || !lowercaseRegex.test(password) || !digitRegex.test(password) || !specialRegex.test(password)) {
    return false
  }

  return true
}

module.exports = { generatePassword, validatePassword }
