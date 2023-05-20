import axios from "axios";

const url = 'https://impressivetenseprofiles.ikhun.repl.co/api/';

export async function getBookByID(id) {
    try {
        const response = await axios.get(url+"GetBookByID", {
            params: {
                search: id
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
