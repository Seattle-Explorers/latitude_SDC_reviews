CREATE TABLE profilepics (
  id VARCHAR(10) PRIMARY KEY,
  imageUrl VARCHAR(255) NOT NULL,
  UNIQUE(id)
);

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
  -- reviewSize INT NOT NULL,
  userName VARCHAR(255) NOT NULL,
  -- reviews_id INT REFERENCES reviews(id),
  userDp VARCHAR(5) NOT NULL REFERENCES profilepics(id),
  UNIQUE(paddedId)
);

CREATE TABLE reviews (
  id VARCHAR(10) PRIMARY KEY,
  reviewer_name VARCHAR(255) NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date VARCHAR(255) NOT NULL,
  dp VARCHAR(5) NOT NULL REFERENCES profilepics(id),
  response VARCHAR(1000),
  listingId VARCHAR(10) NOT NULL REFERENCES posts(paddedId)
);

COPY profilepics(id,imageUrl) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/RDBMS/imagesData.csv' DELIMITER ',' CSV HEADER;

COPY posts(id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,username,userDp) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/RDBMS/postsData.csv' DELIMITER ',' CSV HEADER;

COPY reviews(id,reviewer_name,body,date,dp,response,listingId) FROM '/home/wil/Desktop/hackreactor/SDC/latitude_SDC_will/database/RDBMS/reviewsData.csv' DELIMITER ',' CSV HEADER;
