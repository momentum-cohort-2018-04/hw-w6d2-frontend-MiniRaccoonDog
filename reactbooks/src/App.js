import React, { Component } from 'react'
import './App.css'
import books from './books.json'
import Book from './Book.jsx'

class App extends Component {
  constructor () {
    super()
    this.state = {
      bookArray: this.preparebooks()
      // onClick: this.opendrop()
    }
    console.log('this state', this.state)
  }

  preparebooks () {
    const newArray = books.map(function (entry) {
      return { bookentry: entry,
        closed: true}
    })
    console.log(newArray)
    return newArray
  }

  openDrop (index) {
  //   console.log('this state open', this.state)
    console.log(this.state)
    console.log(this.state.bookArray)
    const updatedArray = this.state.bookArray.map(function (entry, i) {
      if (i === index) {
        console.log('entry.close', entry.closed)
        let swap = !(entry.closed)
        console.log('swap', swap)
        console.log({
          bookentry: entry.bookentry,
          closed: swap})
        return {
          bookentry: entry.bookentry,
          closed: swap}
      } else {
        return {
          bookentry: entry.bookentry,
          closed: entry.closed}
      }
    })
    console.log(updatedArray)
    this.setState({
      bookArray: updatedArray
    })
    return console.log('FUCKIN WORKED', index)
  }

  render () {
    console.log(this.state)
    console.log(this.state.bookArray)
    return (
      <div className='main'>
        <header className='header'>
          <h1 className='title'>React Books</h1>
        </header>
        <section className='books'>
          <Book array={this.state.bookArray} onClick={(i) => this.openDrop(i)} />
        </section>
      </div>
    )
  }
}
// onClick={() => this.props.onClick(i)}
export default App
