UPDATE chapters
SET chapter_id = $1,
    chapter_title = $2,
    chapter_content = $3
WHERE user_id = $4;