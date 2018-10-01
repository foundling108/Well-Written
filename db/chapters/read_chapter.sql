SELECT *
FROM chapters
WHERE user_id = $1
ORDER BY chapter_id;