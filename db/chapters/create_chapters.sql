INSERT INTO chapters (author_id)
VALUES ($1);
SELECT *
FROM chapters
WHERE author_id = $1