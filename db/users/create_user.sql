INSERT INTO users ( auth0_id, user_image, first_name, last_name, premium )
VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
)
RETURNING *;