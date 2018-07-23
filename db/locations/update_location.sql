UPDATE locations
SET name = $2, description = $2
WHERE loc_id = $1;