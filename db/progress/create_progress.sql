INSERT INTO  progress (author_id)
VALUES ($1);
SELECT *
FROM progress
WHERE author_id = $1