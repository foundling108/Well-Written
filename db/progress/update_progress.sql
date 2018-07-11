UPDATE progress
SET word_count = $2, date = $2
WHERE author_id = $1;