DELETE FROM chapters
WHERE user_id = $1
AND chap_id = $2;
SELECT * FROM chapters;