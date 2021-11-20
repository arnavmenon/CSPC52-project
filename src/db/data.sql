DROP TABLE IF EXISTS flights ;
CREATE TABLE flights ( fid int primary key auto_increment, airline varchar(20), src varchar(20), dst varchar(20)) ;
INSERT INTO flights VALUES (1,"Indigo","MAS","DLH") ;
INSERT INTO flights VALUES (2,"Spirit","LAX","FDR") ;