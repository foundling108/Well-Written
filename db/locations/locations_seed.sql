CREATE TABLE locations (
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    location_id INT,
    location_name VARCHAR(100),
    location_description VARCHAR(255)
)