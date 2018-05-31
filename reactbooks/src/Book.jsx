import React, { Component } from 'react'

// class Book extends Component {
//   render () {
//     const array = this.props.array
//     console.log(array)
//     const books = array.map(function (entry) {
//       return entry.bookentry
//     })
//     const bookhtml = books.map(function (element, id) {
//       let title = element.title
//       let author = element.author
//       let url = element.url
//       let shortDescription = element.shortDescription
//       let coverImage = element.coverImageUrl

//       // let publisher = element.publisher
//       // let publicationDate = element.publicationDate
//       let detailedD = element.detailedDescription
//       return (<div className='book' key={id}>
//         <div className='book__preview'>
//           <img src={coverImage} alt={title} />
//         </div>
//         <div className='book__title'><a href={url}>{title}</a></div>
//         <div className='book__author'>{author}</div>
//         <div className='book__synopsis'>{shortDescription}</div>
//         <div className='book__synopsis-long'>{detailedD}</div>
//       </div>)
//     })
//     return bookhtml
//   }
// }

class Book extends Component {
  render () {
    const array = this.props.array
    // console.log(this.props)
    // console.log(this.props.onClick)
    // const openDrop = this.props.onClick()
    const onClick = (i) => this.props.onClick(i)
    // console.log(array)
    // console.log(openDrop)

    const books = array.map(function (element, id) {
      // console.log(onClick)
      let closed = element.closed
      console.log(closed)

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
        <div className='book__title'><a href={url}>{title}</a></div>
        <div className='book__author'>{author}</div>
        { publisher && publicationDate &&
          <div className='book__publisher'>
            <div className='book__publisher-org'>{publisher}</div>
            <div className='book__publisher-date'>{publicationDate}</div>
          </div>
        }
        <a className='arrow' onClick={() => onClick(id)}><i>Click here to read more</i></a>
        { closed && <div className='book__synopsis'>{shortDescription}</div>}
        { closed === false && <div className='book__synopsis-long'>{detailedD}</div>}
        {/* <div className='book__synopsis-long'>{detailedD}</div> */}
      </div>)
    })
    return books
  }
}

export default Book
