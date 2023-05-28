import React, {useEffect, useState} from "react";
import './bookpage.css'
import {Navbar, ErrorPage} from '../../components'
import {Link, useParams} from "react-router-dom";
import {getBookByID} from './functions.js'

const TurnObjectIntoBook = ({ Rooks }) => {
    const {id} = useParams();
  return (
    <>
      {Rooks.map((book, index) => (
        <tr style={{ height: "50px" }} key={index}>
          <td style={{  }}><Link to={{pathname: `/book/${id}/${book.chapter_id}`}}><button>{book.chapter_title}</button></Link></td>
          <td style={{  }}>{book.chapter_language}</td>
          <td style={{  }}>{book.chapter_group}</td>
        </tr>
      ))}
    </>
  );
};


const Bookpage = (props) => {
    const {id} = useParams();
    const [book,
        setBook] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const data = await getBookByID(id);
                setBook(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);
    if (!book) {
        return (
            <div className="Error">
                <ErrorPage/>
            </div>
        )

    }
    return (
<div className="bookpage">
  <Navbar />
  <div className="bookpage__container">
    <div className="bookpage__container__image">
      <img src={book[0].cover_url} alt="book" />
    </div>
    <div className="bookpage__container__description">
      <h1>{book[0].book_title}</h1>
      <h2>{book[0].author_name}</h2>
      <h4>Descriptions: {book[0].descriptions}</h4>
      <h3>Rating {book[0].rating}/5</h3>
    </div>
    <div className="bookpage__container__buttons">
     <Link to={{pathname: `/book/${id}/${book[0].chapter_id}`}}> <button className="read_button">Start Reading</button> </Link>
    <Link to={{pathname: `/book/${id}/upload`}}>   <button className="upload_button">Upload Chapter</button> </Link> 
    </div>
    <div className="bookpage__container__chapters">
      <table>
        <thead>
          <tr>
            <th>Chapter</th>
            <th>Chapter Language</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          <TurnObjectIntoBook Rooks={book} />
        </tbody>
      </table>
    </div>
  </div>
</div>

    )
}

export default Bookpage;
