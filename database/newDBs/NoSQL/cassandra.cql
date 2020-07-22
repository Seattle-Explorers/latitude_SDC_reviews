-- CREATE KEYSPACE sdc WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '3'} AND durable_writes = 'true';

-- USE sdc;

CREATE TABLE posts (
  id VARCHAR,
  paddedId VARCHAR,
  locationAvg VARCHAR,
  valueAvg VARCHAR,
  accuracyAvg VARCHAR,
  commAvg VARCHAR,
  cleanAvg VARCHAR,
  checkinAvg VARCHAR,
  avg VARCHAR,
  username VARCHAR,
  userDp VARCHAR,
  PRIMARY KEY(paddedId)
);

CREATE TABLE reviews (
  reviewId VARCHAR,
  reviewerDp VARCHAR,
  reviewerName VARCHAR,
  reviewBody VARCHAR,
  reviewDate VARCHAR,
  reviewResponse VARCHAR,
  listingId VARCHAR,
  PRIMARY KEY(listingId, reviewId)
);

-- ::::: USE Bulk Loader :::::
-- COPY sdc.posts (id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,username,userDp) FROM '/home/will/Desktop/latitude_SDC_reviews/database/newDBs/postsData.csv' WITH DELIMITER=',' AND HEADER=TRUE;

-- COPY sdc.reviews (reviewId,reviewerDp,reviewerName,reviewBody,reviewDate,reviewResponse,listingId) FROM '/home/will/Desktop/latitude_SDC_reviews/database/newDBs/reviewsData.csv' WITH DELIMITER=',' AND HEADER=TRUE;
