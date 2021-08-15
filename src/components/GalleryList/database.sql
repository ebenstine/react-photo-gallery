/* THIS DATABASE IS CURRENTLY INACTIVE FOR THE APP

CREATE TABLE gallery(
    id serial PRIMARY KEY,
    path varchar(150) NOT NULL,
    description varchar(200),
    likes integer 
);

INSERT INTO "gallery"(path, description, likes)
VALUES 
    ('images/AM1.jpeg', 'Anna and M at Groten, summer 2019', 0 ),
    ('images/AM2.jpeg', 'Anna and M at HaiHai, spring 2019', 0),
    ('images/AM3.jpeg', 'Anna and M by the creek in the old spot, fall 2019' , 0),
    ('images/LA1.jpeg', 'First photo of the twins, spring 2021', 0),
    ('images/LA2.jpeg', 'Early at-home photo of the twins, spring 2021', 0),
    ('images/4745A.jpeg', 'Golden hour moment at the old house, fall 2019', 0),
    ('images/M1.jpeg', 'Malcolm at Lake St. Croix, summer 2020', 0);
    