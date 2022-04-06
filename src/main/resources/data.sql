CREATE TABLE SomeObject (
    id int COMMENT 'creamed',
    name varchar(255) COMMENT 'corn'
);

INSERT INTO SomeObject (id, name) VALUES (1, CAST('Can' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (2, CAST('I' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (3, CAST('Have' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (4, CAST('A' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (5, CAST('Hotdog' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (6, CAST('Boss' as varchar(255)));
INSERT INTO SomeObject (id, name) VALUES (7, CAST('Am' as varchar(255)));

CREATE TABLE SomeObjectLinks (
    id int COMMENT 'Id of the link itself',
    linkfrom varchar(255) COMMENT 'linking from objectId',
    linkto varchar(255) COMMENT 'linking to objectId'
);

INSERT INTO SomeObjectLinks (id, linkfrom, linkto) VALUES (1, 2, 7); -- I Am
INSERT INTO SomeObjectLinks (id, linkfrom, linkto) VALUES (1, 7, 4); -- A
INSERT INTO SomeObjectLinks (id, linkfrom, linkto) VALUES (1, 4, 5); -- Hotdog
