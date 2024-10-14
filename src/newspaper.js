const PaidPost = require('./paid-post')

class Newspaper extends PaidPost {
  constructor (name, price, district) {
    super(name, price)
    this.district = district
  }

  get summary () { // Es una función que parece una propiedad, se llamas sin ()
    return super.summary + ` of ${this.district}`
  }
}

module.exports = Newspaper
