UPDATE chapters
SET description = $2, input = $2
WHERE chap_id = $1;