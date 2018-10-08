SELECT *
FROM locations
WHERE user_id = $1
ORDER BY location_id;