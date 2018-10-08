UPDATE locations
SET location_id = $1,
    location_name = $2,
    location_description = $3
WHERE user_id = $4
AND location_id = $1;
SELECT *
FROM locations
WHERE user_id = $4
ORDER BY location_id;