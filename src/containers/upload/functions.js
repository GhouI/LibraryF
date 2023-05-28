import axios from "axios";

const url = "https://verseify-api.vercel.app/api/"
export  async function getBookByID(id) {
    try {
        const response = await axios.get(url+"GetBookByID", {
            params: {
                search: id
            }
        });
        console.log("Data, "+response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export async function UploadChapterByBookIdAndChapter(book_id, chapter_content, chapter_title, chapter_language, groupName) {
 const data = {
  book_id: 3,
  chapter_title: 'your_chapter_title',
  chapter_language: 'your_chapter_language',
  chapter_content: 'your_chapter_content',
  chapter_group: 'your_chapter_group'
};
axios.post('https://verseify-api.vercel.app/api/UploadChapterByBookId', data).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
}



