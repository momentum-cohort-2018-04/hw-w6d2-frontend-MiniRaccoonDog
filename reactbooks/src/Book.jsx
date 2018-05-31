import React, { Component } from 'react'

class Book extends Component {
  render () {
    const array = this.props.array
    const onClick = (i) => this.props.onClick(i)

    const books = array.map(function (element, id) {
      let closed = element.closed

      let title = element.bookentry.title
      let author = element.bookentry.author
      let url = element.bookentry.url
      let shortDescription = element.bookentry.shortDescription
      let coverImage = element.bookentry.coverImageUrl
      let publisher = element.bookentry.publisher
      let publicationDate = element.bookentry.publicationDate
      let detailedD = element.bookentry.detailedDescription

      return (<div className='book' key={id}>
        <div className='book__preview'>
          { coverImage && <img src={coverImage} alt={title} />
          }
        </div>
        <div className='book__info'>
          <div className='book__title'><a href={url}>{title}</a></div>
          <div className='book__author'>{author}</div>
          { publisher && publicationDate &&
          <div className='book__publisher'>
            <div className='book__publisher-org'>{publicationDate} | {publisher}</div>
            {/* <div className='book__publisher-date'>{publicationDate}</div> */}
          </div>
          }
          <a className='arrow' onClick={() => onClick(id)}><i>Click here to read more</i></a>
          { closed && <div className='book__synopsis'>{shortDescription}</div>}
          { closed === false && <div className='book__synopsis-long'>{detailedD}</div>}
        </div>
      </div>)
    })
    return books
  }
}

export default Book
