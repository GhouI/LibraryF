import axios from "axios";

const url = "https://verseify-api.vercel.app/api/"
export  async function getBookByID(id) {
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
}



export async function UploadChapterByBookIdAndChapter(book_id, chapter_content, chapter_title, chapter_language, groupName) {
  const data = {
    book_id: book_id,
    chapter_title: chapter_title,
    chapter_language: chapter_language,
    chapter_content: chapter_content,
    chapter_group: groupName
  };
axios.post('https://verseify-api.vercel.app/api/UploadChapterByBookId', data).then((response) => {}).catch((error) => {
  console.log(error);
});
}



