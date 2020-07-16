-- CREATE DATABASE sdc;
-- \c sdc;
-- CREATE SCHEMA sdc_will;
-- SET search_path TO sdc_will;

CREATE TABLE posts (
  id VARCHAR(10) PRIMARY KEY,
  paddedId VARCHAR(10) NOT NULL,
  locationAvg VARCHAR(10) NOT NULL,
  valueAvg VARCHAR(10) NOT NULL,
  accuracyAvg VARCHAR(10) NOT NULL,
  commAvg VARCHAR(10) NOT NULL,
  cleanAvg VARCHAR(10) NOT NULL,
  checkinAvg VARCHAR(10) NOT NULL,
  avg VARCHAR(10) NOT NULL,
  userName VARCHAR(255) NOT NULL,
  userDp VARCHAR(5) NOT NULL,
  UNIQUE(paddedId)
);

CREATE TABLE reviews (
  id VARCHAR(10) PRIMARY KEY,
  reviewer_name VARCHAR(255) NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date VARCHAR(255) NOT NULL,
  dp VARCHAR(5) NOT NULL,
  response VARCHAR(1000),
  listingId VARCHAR(10) NOT NULL REFERENCES posts(paddedId)
);

COPY posts (id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,username,userDp) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/newDBs/postsData.csv' DELIMITER ',' CSV HEADER;

COPY reviews (id,reviewer_name,body,date,dp,response,listingId) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/newDBs/reviewsData.csv' DELIMITER ',' CSV HEADER;

CREATE INDEX reviews_listingId_idx ON reviews (listingId);

CREATE INDEX posts_paddedId_idx ON posts (paddedId);