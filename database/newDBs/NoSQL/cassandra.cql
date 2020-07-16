-- CREATE KEYSPACE sdc WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'} AND durable_writes = 'true';

-- USE sdc;

CREATE TABLE posts (
  id VARCHAR PRIMARY KEY,
  paddedId VARCHAR,
  locationAvg VARCHAR,
  valueAvg VARCHAR,
  accuracyAvg VARCHAR,
  commAvg VARCHAR,
  cleanAvg VARCHAR,
  checkinAvg VARCHAR,
  avg VARCHAR,
  -- reviewSize INT,
  userName VARCHAR,
  -- reviews_id INT REFERENCES reviews(id),
  userDp VARCHAR,
);

CREATE TABLE reviews (
  id VARCHAR,
  reviewer_name VARCHAR,
  body VARCHAR,
  date VARCHAR,
  dp VARCHAR,
  response VARCHAR,
  listingId VARCHAR,
  PRIMARY KEY(listingId, id)
);

COPY sdc.posts (id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,username,userDp) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/newDBs/postsData.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY sdc.reviews (id,reviewer_name,body,date,dp,response,listingId) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/newDBs/reviewsData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
