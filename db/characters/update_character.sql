UPDATE characters
SET name = $2, description = $2
WHERE char_id = $1;