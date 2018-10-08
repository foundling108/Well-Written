UPDATE progress
SET progress_id = $1,
    entry_date = $2,
    word_count = $3
WHERE user_id = $4
AND progress_id = $1;
SELECT *
FROM progress
WHERE user_id = $4
ORDER BY progress_id;