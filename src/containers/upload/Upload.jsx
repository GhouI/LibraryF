import React, {useEffect, useState} from "react";
import './upload.css'
import {Navbar, ErrorPage} from "../../components";
import {useParams, Link} from "react-router-dom";
import {getBookByID, UploadChapterByBookIdAndChapter} from './functions.js'
const Upload = () => {
    const {id} = useParams();
    const [book,
        setBook] = useState(null);

  const handleUpload = async () => {
    const chapter_title = document.querySelector('input[placeholder="Chapter Title"]').value;
    const chapter_language = document.querySelector('input[placeholder="Chapter Language"]').value;
    const Group = document.querySelector('input[placeholder="Group"]').value;
    const chapter_content = document.querySelector('textarea[placeholder="Chapter Content"]').value;

    try {
      await UploadChapterByBookIdAndChapter(id, chapter_title, chapter_language, Group, chapter_content );
      // Handle successful upload
      console.log('Chapter uploaded successfully');
    } catch (error) {
      // Handle error
      console.error('Error uploading chapter:', error);
    }
  };
    useEffect(() => {
        const fetchData = async() => {
            try {
                const data = await getBookByID(id);
                setBook(data);
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
    <div className="upload">
      <Navbar />
      <div className="upload__container">
        <h1>Upload A Chapter For {book[0].book_title}</h1>
        <form className="upload__container__form">
          <label>Chapter Title</label>
          <input type="text" placeholder="Chapter Title" required/>
          <label>Group</label>
          <input type="text" placeholder="Group" required />
          <label>Chapter Language</label>
          <input type="text" placeholder="Chapter Language" required />
          <label>Chapter Content</label>
          <textarea
            style={{ resize: 'both' }}
            placeholder="Chapter Content"
            required
          ></textarea>
          <Link to={{
                pathname: `/book/${id}`
          }}><button onClick={handleUpload}>Upload</button> </Link>
        </form>
      </div>
    </div>
    )
};

export default Upload;