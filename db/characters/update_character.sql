UPDATE characters
SET name = $2, description = $2
WHERE author_id = $1;