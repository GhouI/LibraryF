-- Create the Authors table
CREATE TABLE Authors (
  author_id INT PRIMARY KEY,
  author_name VARCHAR(100) NOT NULL
);

-- Create the Publishers table
CREATE TABLE Publishers (
  publisher_id INT PRIMARY KEY,
  publisher_name VARCHAR(100) NOT NULL
);

-- Create the Books table
CREATE TABLE Books (
  book_id INT PRIMARY KEY,
  author_id INT,
  publisher_id INT,
  book_title VARCHAR(100) NOT NULL,
  ratings DECIMAL(2,1),
  FOREIGN KEY (author_id) REFERENCES Authors (author_id),
  FOREIGN KEY (publisher_id) REFERENCES Publishers (publisher_id)
);

-- Create the BookTexts table
CREATE TABLE BookTexts (
  book_id INT,
  language VARCHAR(50),
  book_text TEXT,
  FOREIGN KEY (book_id) REFERENCES Books (book_id)
);

-- Create the BookCovers table
CREATE TABLE BookCovers (
  book_id INT PRIMARY KEY,
  cover_url VARCHAR(200),
  FOREIGN KEY (book_id) REFERENCES Books (book_id)
);
