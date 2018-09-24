SELECT *
FROM chapters
LEFT JOIN users ON chapters.author_id=users.user_id
WHERE author_id = $1;

-- SELECT chapters.author_id
-- FROM chapters
-- LEFT JOIN users ON chapters.author_id=users.user_id
