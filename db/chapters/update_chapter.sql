UPDATE chapters
SET description = $2, input = $2
WHERE author_id = $1;