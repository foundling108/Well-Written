INSERT INTO  locations (author_id)
VALUES ($1);
SELECT *
FROM locations
WHERE author_id = $1