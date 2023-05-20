import React, { useEffect, useState } from "react";
import './bookpage.css'
import { Navbar, ErrorPage } from '../../components'
import { useParams } from "react-router-dom";
import { getBookByID } from './functions.js'

const Bookpage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBookByID(id);
                setBook(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id]);
    if(!book){
        return (
            <div className="Error">
                <ErrorPage />
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
            </div>
        </div>
    )
}

export default Bookpage;
