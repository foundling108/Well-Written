DELETE FROM progress
WHERE log_id = $1;
SELECT * FROM progress;