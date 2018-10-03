UPDATE chapters
SET chapter_id = $1,
    chapter_title = $2,
    chapter_content = $3
WHERE user_id = $4;
SELECT *
FROM chapters
WHERE user_id = $4
ORDER BY chapter_id;