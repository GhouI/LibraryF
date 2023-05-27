import axios from "axios";

const url = 'https://verseify-api.vercel.app/api/';

export default async function getBookContentByID(id) {
    try {
        const response = await axios.get(url+"GetBookContentByChapterID", {
            params: {
                search: id
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}