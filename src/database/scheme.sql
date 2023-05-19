--Creates the Author table
CREATE TABLE Authors (
author_id INT PRIMARY KEY,
author_name VARCHAR(100) NOT NULL,
author_cover_url VARCHAR(200)
);
--Creates the Publisher table
CREATE TABLE Publishers (
publisher_id INT PRIMARY KEY,
publisher_name VARCHAR(100) NOT NULL
);
--Creates the Book table
CREATE TABLE Books (
book_id INT PRIMARY KEY,
author_id INT,
publisher_id INT,
book_title VARCHAR(100) NOT NULL,
ratings DECIMAL(2,1),
FOREIGN KEY (author_id) REFERENCES Authors(author_id),
FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id)
);
--Creates the BookTexts table
CREATE TABLE BookTexts (
book_id INT,
language VARCHAR(50),
book_text TEXT,
FOREIGN KEY (book_id) REFERENCES Books(book_id)
);
--Creates the BookCovers table
CREATE TABLE BookCovers (
book_id INT PRIMARY KEY,
cover_url VARCHAR(200),
FOREIGN KEY (book_id) REFERENCES Books(book_id)
);
--Examples of Using the Tables
--Inserting into Authors
INSERT INTO Authors (author_id, author_name, author_cover_url)
VALUES (1, 'J.K. Rowling', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg');
INSERT INTO Authors (author_id, author_name, author_cover_url)
VALUES (2, 'J.R.R. Tolkien', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tolkien_1916.jpg/220px-Tolkien_1916.jpg');
INSERT INTO Authors (author_id, author_name, author_cover_url)
VALUES (3, 'George R.R. Martin', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/George_R.R._Martin_2012.jpg/220px-George_R.R._Martin_2012.jpg');
--Inserting into Publishers
INSERT INTO Publishers (publisher_id, publisher_name)
VALUES (1, 'Bloomsbury Publishing');
INSERT INTO Publishers (publisher_id, publisher_name)
VALUES (2, 'HarperCollins');
INSERT INTO Publishers (publisher_id, publisher_name)
VALUES (3, 'Bantam Spectra');
--Inserting into Books
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (1, 1, 1, 'Harry Potter and the Philosopher''s Stone', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (2, 1, 1, 'Harry Potter and the Chamber of Secrets', 4.4);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (3, 1, 1, 'Harry Potter and the Prisoner of Azkaban', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (4, 1, 1, 'Harry Potter and the Goblet of Fire', 4.7);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (5, 1, 1, 'Harry Potter and the Order of the Phoenix', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (6, 1, 1, 'Harry Potter and the Half-Blood Prince', 4.6);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (7, 1, 1, 'Harry Potter and the Deathly Hallows', 4.6);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (8, 2, 2, 'The Hobbit', 4.2);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (9, 2, 2, 'The Fellowship of the Ring', 4.3);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (10, 2, 2, 'The Two Towers', 4.3);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (11, 2, 2, 'The Return of the King', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (12, 3, 3, 'A Game of Thrones', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (13, 3, 3, 'A Clash of Kings', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (14, 3, 3, 'A Storm of Swords', 4.5);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (15, 3, 3, 'A Feast for Crows', 4.0);
INSERT INTO Books (book_id, author_id, publisher_id, book_title, ratings)
VALUES (16, 3, 3, 'A Dance with Dragons', 4.0);
--Lorem Possum as a Variable
DECLARE @lorem_possum VARCHAR(1000);
SET @lorem_possum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl vitae aliquam ultricies, nunc nunc aliquet nunc, sed aliquam nisl ni'
--Inserting into BookTexts
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(1, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(2, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(3, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(4, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(5, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(6, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(7, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(8, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(9, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(10, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(11, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(12, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(13, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(14, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(15, 'English', @lorem_possum);
INSERT INTO BookTexts (book_id, language, book_text)
VALUES(16, 'English', @lorem_possum);
--Inserting into BookCovers
INSERT INTO BookCovers (book_id, cover_url)
VALUES(1, 'https://upload.wikimedia.org/wikipedia/en/b/bf/Harry_Potter_and_the_Philosopher%27s_Stone_1st_edition.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(2, 'https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(3, 'https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(4, 'https://upload.wikimedia.org/wikipedia/en/c/c7/Harry_Potter_and_the_Goblet_of_Fire.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(5, 'https://upload.wikimedia.org/wikipedia/en/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(6, 'https://upload.wikimedia.org/wikipedia/en/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(7, 'https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(8, 'https://upload.wikimedia.org/wikipedia/en/3/30/The_Hobbit_cover.JPG');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(9, 'https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(10, 'https://upload.wikimedia.org/wikipedia/en/a/a1/The_Two_Towers_cover.gif');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(11, 'https://upload.wikimedia.org/wikipedia/en/1/11/The_Return_of_the_King_cover.gif');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(12, 'https://upload.wikimedia.org/wikipedia/en/d/d8/A_Game_of_Thrones.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(13, 'https://upload.wikimedia.org/wikipedia/en/a/a3/A_Clash_of_Kings.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(14, 'https://upload.wikimedia.org/wikipedia/en/9/93/A_Storm_of_Swords.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(15, 'https://upload.wikimedia.org/wikipedia/en/8/88/A_Feast_for_Crows.jpg');
INSERT INTO BookCovers (book_id, cover_url)
VALUES(16, 'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_with_Dragons.jpg');

