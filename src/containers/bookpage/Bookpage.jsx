import React, {useEffect, useState} from "react";
import './bookpage.css'
import {Navbar, ErrorPage} from '../../components'
import {Link, useParams} from "react-router-dom";
import {getBookByID} from './functions.js'

const Bookpage = (props) => {
    console.log(props.location)
    const {id} = useParams();
    const [book,
        setBook] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
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
    if (!book) {
        return (
            <div className="Error">
                <ErrorPage/>
            </div>
        )

    }
    return (
        <div className="bookpage">
            <Navbar/>
            <div className="bookpage__container">
                <div className="bookpage__container__image">
                    <img
                        src={book[0].cover_url}
                        alt="book"
                        style={{
                        left: "5%",
                        position: "absolute"
                    }}/>
                </div>
                <div className="bookpage__container__description">
                    <h1
                        style={{
                        padding: "25px",
                        paddingRight: "25px",
                        position: "absolute",
                        color: "white",
                        fontSize: "50px",
                        top: "10%",
                        left: "21%",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px #000000"
                    }}>{book[0].book_title}
                    </h1>

                    <h2
                        style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "30px",
                        top: "20%",
                        left: "22%",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px #000000"
                    }}>{book[0].author_name}</h2>
                    <h3
                        style={{
                        position: "absolute",
                        color: "yellow",
                        fontSize: "20px",
                        top: "27%",
                        left: "22%",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px #000000"
                    }}>Rating {book[0].ratings}/5</h3>
                </div>
                <div className="bookpage__container__buttons">
                    <button
                        style={{
                        position: "absolute",
                        top: "30%",
                        left: "22%",
                        width: "200px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#FF4820", // orange hex is #FFA500 
                        border: "none", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "20px", color: "white", boxShadow: "2px 2px 4px #000000" }}>Start Reading</button>
                    <button
                        style={{
                        position: "absolute",
                        top: "30%",
                        left: "32%",
                        width: "200px",
                        height: "50px",
                        borderRadius: "10px",
                        backgroundColor: "#90EE68", //bright green hex is # 
                        border: "none", fontFamily: "Arial, Helvetica, sans-serif", fontWeight: "bold", fontSize: "20px", color: "white", boxShadow: "2px 2px 4px #000000" }}>Upload Chapter</button>
                </div>
                <div className="bookpage__container__chapters" style={{}}>
                    <table
                        style={{
                        position: "absolute",
                        top: "40%",
                        left: "22%",
                        width: "50%",
                        borderCollapse: "collapse",
                        fontFamily: "Arial, Helvetica, sans-serif",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "white",
                        boxShadow: "2px 2px 4px #000000",
                        tableLayout: "fixed"
                    }}>
                        <thead>
                            <tr>
                                <th
                                    style={{
                                    border: "1px solid white"
                                }}>Chapter</th>
                                <th
                                    style={{
                                    border: "1px solid white"
                                }}>Chapter Language</th>
                                <th
                                    style={{
                                    border: "1px solid white"
                                }}>Group</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                style={{
                                height: "50px"
                            }}>
                                <td
                                    style={{
                                    border: "1px solid white"
                                }}>
                                    <Link to="/book/1/1">
                                    <button
                                style={{
                                width: "20%",
                                height: "100%",
                                borderRadius: "10px",
                                backgroundColor: "#FF4820", // orange hex is #FFA500
                                border: "none",
                                fontFamily: "Arial, Helvetica, sans-serif",

                                }}>Chapter 1</button></Link></td>
                                <td
                                    style={{
                                    border: "1px solid white"
                                }}>English</td>
                                <td
                                    style={{
                                    border: "1px solid white"
                                }}>Group 1</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Bookpage;
