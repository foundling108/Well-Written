UPDATE progress
SET word_count = $2, date = $2
WHERE log_id = $1;