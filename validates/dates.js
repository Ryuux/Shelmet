class MyMoment {
  constructor (date) {
    this.date = date ? (typeof date === 'string' ? new Date(date) : new Date(date.getTime())) : new Date()
  }
}

MyMoment.prototype.format = function (formatString) {
  const { date } = this
  const [year, month, day, hour, minute, second, millisecond] = [
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    date.getDate().toString().padStart(2, '0'),
    date.getHours().toString().padStart(2, '0'),
    date.getMinutes().toString().padStart(2, '0'),
    date.getSeconds().toString().padStart(2, '0'),
    date.getMilliseconds().toString().padStart(3, '0')
  ]

  const formattedString = formatString.replace(/YYYY/g, year)
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/HH/g, hour)
    .replace(/mm/g, minute)
    .replace(/ss/g, second)
    .replace(/SSS/g, millisecond)

  return formattedString
}

MyMoment.prototype.addDays = function (days) {
  const { date } = this
  const newDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000)
  this.date = newDate
  return this
}

MyMoment.prototype.diff = function (otherMoment, unit) {
  const date1 = this.date
  const date2 = otherMoment.date

  const diffMs = Math.abs(date1 - date2)

  switch (unit) {
    case 'years':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365))
    case 'months':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30))
    case 'weeks':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24 * 7))
    case 'days':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24))
    case 'hours':
      return Math.floor(diffMs / (1000 * 60 * 60))
    case 'minutes':
      return Math.floor(diffMs / (1000 * 60))
    case 'seconds':
      return Math.floor(diffMs / 1000)
    case 'milliseconds':
      return diffMs
    default:
      throw new Error(`Invalid time unit: ${unit}`)
  }
}

MyMoment.prototype.weekday = function () {
  const date = this.date
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekday = weekdays[date.getDay()]
  return `It's ${weekday}!`
}

module.exports = MyMoment
