SELECT *
FROM progress
WHERE user_id = $1
ORDER BY progress_id;