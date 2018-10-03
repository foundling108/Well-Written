DELETE FROM chapters
WHERE chapter_id = $2
AND user_id = $1;
SELECT * FROM chapters;