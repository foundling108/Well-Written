UPDATE chapters
SET description = $2, input = $3
WHERE chap_id = $1;
SELECT * FROM chapters
WHERE author_id = $4
