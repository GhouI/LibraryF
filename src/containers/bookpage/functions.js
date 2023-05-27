import axios from "axios";

const url = 'https://verseify-api.vercel.app/api/';

export  async function getBookByID(id) {
    try {
        const response = await axios.get(url+"getBookByID", {
            params: {
                search: id
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}