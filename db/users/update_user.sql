UPDATE users
SET username = $2, password = $2
WHERE user_id = $1;