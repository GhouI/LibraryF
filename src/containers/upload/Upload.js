import React  from "react";
import { Navbar } from "../../components";
import {useParams } from "react-router-dom";

const Upload = () => {
    const {id} = useParams();
    return (
        <div>
            <Navbar />
            <h1 style={{

            }}>Upload A Chapter</h1>
        </div>
    )
};

export default Upload;