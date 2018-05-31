import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import Book from './Book.jsx'

class App extends Component {
  constructor () {
    super()
    this.state = {
      bookArray: this.preparebooks()
    }
  }

  preparebooks () {
    const newArray = books.map(function (entry) {
      return { bookentry: entry,
        closed: true}
    })
    return newArray
  }

  openDrop (index) {
    const updatedArray = this.state.bookArray.map(function (entry, i) {
      if (i === index) {
        let swap = !(entry.closed)
        return {
          bookentry: entry.bookentry,
          closed: swap}
      } else {
        return {
          bookentry: entry.bookentry,
          closed: entry.closed}
      }
    })
    this.setState({
      bookArray: updatedArray
    })
  }

  render () {
    return (
      <div className='main'>
        <section className='banner'>
          <h1 className='title'>React Books</h1>
        </section>
        <section className='books'>
          <Book array={this.state.bookArray} onClick={(i) => this.openDrop(i)} />
        </section>
      </div>
    )
  }
}

export default App
