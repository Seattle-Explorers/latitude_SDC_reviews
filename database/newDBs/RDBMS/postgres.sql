CREATE DATABASE sdc;
\c sdc;
CREATE SCHEMA sdc;
SET search_path TO sdc;

CREATE TABLE posts (
  id VARCHAR(10),
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
  reviewId VARCHAR(10),
  reviewerDp VARCHAR(5) NOT NULL,
  reviewerName VARCHAR(255) NOT NULL,
  reviewBody VARCHAR(1000) NOT NULL,
  reviewDate VARCHAR(255) NOT NULL,
  reviewResponse VARCHAR(1000),
  listingId VARCHAR(10) NOT NULL REFERENCES posts(paddedId)
);

\COPY posts (id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,username,userDp) FROM '/home/will/Desktop/latitude_SDC_reviews/database/newDBs/postsData.csv' DELIMITER ',' CSV HEADER;

\COPY reviews (reviewId,reviewerDp,reviewerName,reviewBody,reviewDate,reviewResponse,listingId) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_reviews/database/newDBs/reviewsData.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE posts ADD PRIMARY KEY (id);

ALTER TABLE reviews ADD PRIMARY KEY (reviewId);

CREATE INDEX reviews_listingId_idx ON reviews (listingId);

CREATE INDEX posts_paddedId_idx ON posts (paddedId);