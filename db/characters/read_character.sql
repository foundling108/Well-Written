SELECT *
FROM characters
WHERE user_id = $1
ORDER BY character_id;