CREATE TABLE progress (
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    progress_id INT,
    entry_date VARCHAR(30),
    word_count VARCHAR(20)
)