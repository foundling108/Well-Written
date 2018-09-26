CREATE TABLE chapters (
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    chapter_id INT,
    chapter_title VARCHAR(100),
    chapter_content VARCHAR(255)
)