DELETE FROM locations
WHERE location_id = $2
AND user_id = $1;
SELECT *
FROM locations
WHERE user_id = $1
ORDER BY location_id;