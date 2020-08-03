# Latitude

- **Latitude** is an open source web application that provides lodging and reservation services.

# Reviews Component

- **This repository** is responsible for a particular component of Latitude which provides **reviews service**, where customers can leave comments and the host may reply to such comments.
- A proxy application which utilizes multiple instances of this repository can be deployed to **AWS EC2** and is able to **handle production level traffic**.
 - Tested with <a href="https://loader.io/" target="_blank">**Loader.io**</a> and <a href="https://newrelic.com/" target="_blank">**New Relic**</a>, said proxy instance is currently capable of handling **1,000 requests per second throughput** with less than **400 milliseconds response time**, when deployed to **AWS EC2** with the use of <a href="https://www.nginx.com/" target="_blank">**NGINX**</a>'s load balancing functionality.


## Technologies
> This service is created with :
- **Node Package Manager**    v6.14.5
- **React.js / React DOM**    v16.13.1
- **Node.js**    v12.18.2
- **PostgreSQL**    v12.3


## Getting Started
> This service will soon be available on <a href="https://hub.docker.com/repository/docker/wpark95/" target="_blank">Docker Hub</a> and can be used for easier **deployment** if necessary.

- To **Install Required Dependencies** :
  - **npm install**

- To **Create Example Records** :
  - **Warning** : Please disregard the following message if you have more than **70 Gigabytes** of **free space** available on your local/virtual machine.
    > - Without modification, following commands are set to create two CSV files which are likely to contain more than 100 million records of example data combined. Said CSV files are likely to require more than **minimum 30 Gigabytes of free space**. Please check the available storage of your local/virtual machine before running the following commands to prevent your machine from running out of storage.
    > - **Alternatively**, you may modify *postsDataGenerator.js* and *reviewsDataGenerator.js* **after** cloning this repository to reduce the size of sample data. For your convenience, the number of records to be generated are presented at the top of each file and you can simply comment out the current **targetListingDataNum** variable and uncomment one of the provided targetListingDataNum variables, which are set to create records range from **1,000**, **100,000**, **1,000,000**, and **5,000,000**, by adding and removing **//** in front of targetListingDataNum variables. Additionally, you may modify the number associated with the targetListingDataNum variable to create a number of records that you prefer. If you choose to alter the targetListingDataNum variable, please verify that the numbers of **both** **postsDataGenerator.js* and *reviewsDataGenerator.js* are the **same** prior to running the following commands.

  - **npm run postsGen**
  - **npm run reviewsGen**

- To **seed example data** to the database :
  - **npm run seedDB**

- To compile the client bundle using **Webpack** :
  - **npm run watch**

- To start the server using **Nodemon** :
  - **npm run server**
    - Note: Originally, the server is set to use **port 3002**


## Team
- Sister Components of Latitude
  - <a href="https://github.com/Seattle-Explorers/latitude_SDC_chelsea" target="_blank">Description Service</a> by Chelsea Schmidt
  - <a href="https://github.com/Seattle-Explorers/latitude_reservations" target="_blank">Reservation Service</a> by Janet Zheng


## License
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
