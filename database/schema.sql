CREATE DATABASE IF NOT EXISTS image_processing_service;

USE image_processing_service;

DROP TABLE IF EXISTS Images;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
    username VARCHAR(25) PRIMARY KEY
)