DELETE FROM characters
WHERE character_id = $2
AND user_id = $1;
SELECT * 
FROM characters
WHERE user_id = $1
ORDER BY character_id;