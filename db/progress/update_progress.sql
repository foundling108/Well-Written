UPDATE progress
SET word_count = $2, date = $3
WHERE log_id = $1;
SELECT * FROM progress
WHERE author_id = $4