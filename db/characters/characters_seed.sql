CREATE TABLE characters (
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    character_id INT,
    character_name VARCHAR(100),
    character_description VARCHAR(255)
)