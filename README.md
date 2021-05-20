# DBMS-Project
Blood bank management system

RUN THESE COMMANDS TO INITIALISE DB FIRST:
mysql> CREATE TABLE donars(_id int NOT NULL AUTO_INCREMENT , fName varchar(50) NOT NULL, email varch
ar(50) NOT NULL, bGroup varchar(4) NOT NULL, age int NOT NULL, state varchar(50) NOT NULL, city var
har(50) NOT NULL, PRIMARY KEY(_id) );
Query OK, 0 rows affected (0.74 sec)

mysql> CREATE TABLE receivers(_id int NOT NULL AUTO_INCREMENT , fName varchar(50) NOT NULL, email varchar(50) NOT NULL, bGroup varchar(4) NOT NULL, age int NOT NULL, state varchar(50) NOT NULL, city varchar(50) NOT NULL, PRIMARY KEY(_id) );
Query OK, 0 rows affected (0.57 sec)

mysql> CREATE TABLE inventory(_id int NOT NULL AUTO_INCREMENT, fName varchar(50) NOT NULL, bGroup varchar(4) NOT NULL, age int NOT NULL, PRIMARY KEY(_id));
Query OK, 0 rows affected (0.53 sec)

mysql> CREATE TRIGGER insert_after_insert
    -> AFTER INSERT ON donars
    -> FOR EACH ROW
    -> INSERT INTO inventory(_id, fName, bGroup, age) VALUES(new._id, new.fName, new.bGroup, new.age);
Query OK, 0 rows affected (1.35 sec)

mysql> CREATE TRIGGER del_after_insert
    -> AFTER INSERT ON receivers
    -> FOR EACH ROW
    -> DELETE FROM inventory WHERE _id = new._id;
Query OK, 0 rows affected (0.12 sec)
