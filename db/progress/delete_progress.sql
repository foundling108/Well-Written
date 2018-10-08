DELETE FROM progress
WHERE progress_id = $2
AND user_id = $1;
SELECT *
FROM progress
WHERE user_id = $1
ORDER BY progress_id;