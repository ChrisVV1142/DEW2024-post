const User = require('./user')

class Post {
  #number = 0
  #suscribers = []

  constructor (name) {
    this.name = name
  }

  get summary () {
    return `${this.name} publication number ${this.#number}`
  }

  getSubscribers () {
    return this.#suscribers.map(user => user.name).join(',')
  }

  attach (user) {
    if (user instanceof User) {
      if (!this.#suscribers.includes(user)) {
        this.#suscribers.push(user)
      }
    }
  }

  detach (user) {
    // const index = this.#suscribers.indexOf(user)
    // if (index >= 0) {
    //   this.#suscribers.splice(index, 1)
    // }

    // DOS OPCIONES

    this.#suscribers = this.#suscribers.filter(u => u !== user)
  }

  publish () {
    this.#number++
    return this.#suscribers.map(s => s.notify(this))
  }
}

module.exports = Post
