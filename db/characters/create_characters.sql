INSERT INTO characters (author_id)
VALUES ($1);
SELECT *
FROM characters
WHERE author_id = $1