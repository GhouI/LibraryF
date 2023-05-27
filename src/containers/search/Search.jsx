import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './search.css';
import {Link} from 'react-router-dom';
import {Navbar} from '../../components';

const Search = () => {
    const [inputValue,
        setInputValue] = useState('');
    const [booksData,
        setBooksData] = useState([]);

    const handleInputChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
    };

    useEffect(() => {
        let timerId = null;

        const makeAPICall = () => {
            // Call the API function here using the inputValue
            if (inputValue.trim() !== '') {
                APICall(inputValue);
            } else {
                setBooksData([]);
            }
        };

        const handleTypingFinished = () => {
            clearTimeout(timerId);
            makeAPICall();
        };

        if (inputValue) {
            timerId = setTimeout(handleTypingFinished, 500); // Adjust the delay as needed (e.g., 500ms)
        } else {
            setBooksData([]);
        }

        // Clean up the timer on component unmount
        return () => clearTimeout(timerId);
    }, [inputValue]);

    const APICall = (searchQuery) => {
        // Perform your API call here using the searchQuery parameter
        const URL = 'https://verseify-api.vercel.app/api/getbook';

        axios
            .get(URL, {
            params: {
                search: searchQuery
            }
        })
            .then((response) => {
                console.log(response.data);
                if (response.data.length > 0) {
                    setBooksData(response.data);
                } else {
                    setBooksData([]);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="verseify">
            <Navbar/>
            <div className="verseify__search">
                <div className="verseify__search-container">
                    <div className="verseify__search-container-input" style={{}}>
                        <input
                            type="text"
                            placeholder="Search For Books"
                            value={inputValue}
                            onChange={handleInputChange}/> {booksData.length > 0 && CreateButtonForBooks(booksData)}
                    </div>
                </div>
            </div>
        </div>
    )
}
const CreateButtonForBooks = (books) => {
  const buttonRows = [];
  const buttonsPerRow = 3;
  const totalButtons = books.length;

  for (let i = 0; i < totalButtons; i += buttonsPerRow) {
    const rowButtons = books
      .slice(i, i + buttonsPerRow)
      .map((book) => (
        <Link to={{ pathname: `/book/${book.book_id}` }}>
          <div className="book-button">
            <div className="book-image">
              <img src={book.cover_url} alt={book.book_title} />
            </div>
            <div className="book-info">
              <h1>{book.book_title}</h1>
              <p>Author: {book.author_name}</p>
              <p>Rating: {book.rating}/5</p>
              <button>Read Now</button>
            </div>
          </div>
        </Link>
      ));

    buttonRows.push(<div className="button-row">{rowButtons}</div>);
  }

  return <>{buttonRows}</>;
};


export default Search;