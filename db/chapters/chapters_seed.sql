CREATE TABLE chapters (
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    chapter_id INT,
    chapter_title VARCHAR(100),
    chapter_content VARCHAR(255)
);

INSERT INTO chapters (
    user_id,
    chapter_id,
    chapter_title,
    chapter_content
) VALUES (
    3,
    1,
    'In the beginning',
    'words words words'
);

INSERT INTO chapters (
    user_id,
    chapter_id,
    chapter_title,
    chapter_content
) VALUES (
    3,
    2,
    'In the middle',
    'more more more'
);

INSERT INTO chapters (
    user_id,
    chapter_id,
    chapter_title,
    chapter_content
) VALUES (
    3,
    3,
    'In the end',
    'and they lived happily ever after'
);