This service should grant the possibility to stream video sources based on uploaded MP4 files.

Step 1:
Create the database connection, add Users and Files tables.
Database should be deployed in a Docker Container.

Step 2:
Deploy basic serice to a Docker Container, create Tilt config and run API simoulteniously. Implement the user service. Client should be able to register, authorize and acquire the JWT.

Step 3:
Implement the files service. Client should be able to upload a file and to download it using a stream connection. Requests should be authenticated.
