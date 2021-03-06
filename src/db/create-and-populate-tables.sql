DROP TABLE IF EXISTS AIRPORT;
DROP TABLE IF EXISTS AIRLINE;
DROP TABLE IF EXISTS FLIGHT;

CREATE TABLE AIRPORT(
    AP_NAME VARCHAR(100) NOT NULL,
    ID VARCHAR(3) NOT NULL,
    STATE VARCHAR(15), 
    COUNTRY VARCHAR(30),
    CITY VARCHAR(15),
    PRIMARY KEY(ID)
);

--Inserting values for Table: AIRPORT--

INSERT INTO AIRPORT (AP_NAME, ID, STATE, COUNTRY, CITY) VALUES ('Anna International Airport', 'MAA', 'Tamilnadu', 'India', 'Chennai');
INSERT INTO AIRPORT (AP_NAME, ID, STATE, COUNTRY, CITY) VALUES ('John F Kennedy International Airport', 'JFK', 'New York State', 'USA', 'New York');


--Creating Airline Table--

CREATE TABLE AIRLINE(
    ID VARCHAR(3) NOT NULL, 
    AL_NAME VARCHAR(50),
    CODE VARCHAR(3) NOT NULL, 
    PRIMARY KEY(ID)
);

INSERT INTO AIRLINE (ID, AL_NAME, CODE) VALUES('AA','American Airlines','001');
INSERT INTO AIRLINE (ID, AL_NAME, CODE) VALUES('AI','Air India Limited','098');
INSERT INTO AIRLINE (ID, AL_NAME, CODE) VALUES('LH','Lufthansa', '220');
INSERT INTO AIRLINE (ID, AL_NAME, CODE) VALUES('BA','British Airways','125');
INSERT INTO AIRLINE (ID, AL_NAME, CODE) VALUES('QR','Qatar Airways','157');

--Creating Contains Table

CREATE TABLE CONTAINS(
    AIRLINE_ID VARCHAR(3) NOT NULL,
    AIRPORT_ID VARCHAR(100) NOT NULL,
    PRIMARY KEY(AIRLINE_ID, AIRPORT_ID),
    FOREIGN KEY(AIRLINE_ID) REFERENCES AIRLINE(ID) ON DELETE CASCADE,
    FOREIGN KEY(AIRPORT_ID) REFERENCES AIRPORT(ID) ON DELETE CASCADE)
;

INSERT INTO CONTAINS (AIRLINE_ID, AIRPORT_ID) VALUES ('AA', 'MAA');
INSERT INTO CONTAINS (AIRLINE_ID, AIRPORT_ID) VALUES ('AI', 'MAA');
INSERT INTO CONTAINS (AIRLINE_ID, AIRPORT_ID) VALUES ('LH', 'MAA');
INSERT INTO CONTAINS (AIRLINE_ID, AIRPORT_ID) VALUES ('BA', 'MAA');
INSERT INTO CONTAINS (AIRLINE_ID, AIRPORT_ID) VALUES ('QR', 'MAA');

--Creating Flight Table--

CREATE TABLE FLIGHT (
    
    FLIGHT_CODE VARCHAR(10) NOT NULL,
    SOURCE VARCHAR(3),
    DESTINATION VARCHAR(3),
    ARRIVAL VARCHAR(10),
    DEPARTURE VARCHAR(10),
    STATUS VARCHAR(10),
    DURATION VARCHAR(30),
    FLIGHTTYPE VARCHAR(10),
    AIRLINE_ID VARCHAR(3),
    
    CONSTRAINT CHK_Status CHECK(STATUS IN ('On-time', 'Delayed', 'Boarding')),
    CONSTRAINT CHK_Type CHECK(FLIGHTTYPE IN ('Connecting', 'Non-stop')),    

    PRIMARY KEY(FLIGHT_CODE),
    FOREIGN KEY(AIRLINE_ID) REFERENCES AIRLINE(ID) ON DELETE CASCADE,
    FOREIGN KEY(SOURCE) REFERENCES AIRPORT(ID) ON DELETE CASCADE,
    FOREIGN KEY(DESTINATION) REFERENCES AIRPORT(ID) ON DELETE CASCADE
);


INSERT INTO FLIGHT(FLIGHT_CODE, SOURCE, DESTINATION, ARRIVAL, DEPARTURE, STATUS, DURATION, FLIGHTTYPE, AIRLINE_ID)
VALUES('AI2014','MAA','JFK','02:10','23:15','On-time','23hr','Non-stop','AI');






