UPDATE characters
SET character_id = $1,
    character_name = $2,
    character_description = $3
WHERE user_id = $4
AND character_id = $1;
SELECT *
FROM characters
WHERE user_id = $4
ORDER BY character_id;