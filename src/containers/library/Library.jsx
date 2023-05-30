import React, {useEffect, useState} from 'react'
import {Navbar, ErrorPage} from '../../components'
import axios from 'axios'
import './library.css'
import { Link } from 'react-router-dom'
const Library = () => {
    const [book,
        setBook] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const URL = "https://verseify-api.vercel.app/api/"
                const response = await axios.get(`${URL}books`);
                setBook(response.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        fetchData()
    }, [])

    return (
        <div className='Library'>
            <Navbar/>
            <CreateImageButtonsForBooks books={book}/>
        </div>
    )
}
const TakeToPage = (bookId) =>{

}
const CreateImageButtonsForBooks = ({ books }) => {
  if (!books || !Array.isArray(books) || books.length === 0) {
    return <ErrorPage />;
  }

  const bookButtons = books.map((book) => (
    <div className="Abook-button" key={book.book_id}>
      <Link to={{ pathname: `/book/${book.book_id}` }}>
      <div className="book-image">
        <img src={book.cover_url} alt={book.book_title} />
      </div>
      </Link>   
    </div>
  ));

  return <div className="book-buttons-container">{bookButtons}</div>;
};





export default Library