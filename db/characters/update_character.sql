UPDATE characters
SET name = $2, description = $3
WHERE char_id = $1;
SELECT * FROM characters
WHERE author_id = $4