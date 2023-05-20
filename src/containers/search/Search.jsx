import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './search.css';
import {Link} from 'react-router-dom';

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

    const getSearchBoxWidth = () => {
        if (inputValue.length >= 8) {
            return {
                width: `${inputValue.length * 10}px`
            };
        }
        return {};
    };

const CreateButtonForBooks = (books) => {
  const buttonRows = [];
  const buttonsPerRow = 7;
  const totalButtons = books.length;

  for (let i = 0; i < totalButtons; i += buttonsPerRow) {
    const rowButtons = books.slice(i, i + buttonsPerRow).map((book) => (
        <Link to={`/book/${book.book_id}`}>
      <button
        key={book.book_id}
        className="book-button"
        style={{
          width: '321px',
          height: '78px',
          margin: '10px',
        }}
      >
        {book.book_title}
        
      </button>
        </Link>
    ));
    buttonRows.push(
      <div key={i} style={{ display: 'grid', placeItems: 'center' }}>
        {rowButtons}
      </div>
    );
  }

  return <> 
  {buttonRows}
  </>;
};



    const APICall = (searchQuery) => {
        // Perform your API call here using the searchQuery parameter
        const URL = 'https://impressivetenseprofiles.ikhun.repl.co/api/getbook';

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
        <div className="verseify__search">
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={handleInputChange}
                style={getSearchBoxWidth()}
                className="search-input"/> {booksData.length > 0 && CreateButtonForBooks(booksData)}
        </div>
    );
};

export default Search;
