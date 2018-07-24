UPDATE locations
SET name = $2, description = $3
WHERE loc_id = $1;
SELECT * FROM locations
WHERE author_id = $4