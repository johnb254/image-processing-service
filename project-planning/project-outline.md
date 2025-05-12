# Project Outline
This project is a learning tool for me to improve as a backend developer. It is based on the 
guidelines found at [roadmap.sh](https://roadmap.sh/projects/image-processing-service), but this
work is my own.

This project involves creating a backend system for an image processing service similar to
Cloudinary. The service will allow users to upload images, perform various transformations, and
retrieve images. The system will feature user authentication, image upload, transformation 
operations, and efficient retrieval mechanisms.

## Explicit Requirements

### User Authentication
- Sign-Up: Allow users to create an account.
- Log-In: Allow users to log into their account.
- JWT Authentication: Secure endpoints using JWTs for authenticated access.

### Image Management
- Upload Image: Allow users to upload images.
- Transform Image: Allow users to perform various transformations (resize, crop, rotate, 
  watermark etc.).
- Retrieve Image: Allow users to retrieve a saved image in different formats.
- List Images: List all uploaded images by the user with metadata.

### Image Transformation
- Resize
- Crop
- Rotate
- Flip
- Mirror
- Watermark
- Compress **(optional)**
- Change format (JPEG, PNG, etc.) **(optional)**
- Apply filters (grayscale, sepia, etc.) **(optional)**

## Implementations Plans

### Database
The database is going to be locally hosted using MySQL. The database could be hosted on Azure or AWS
in a more advanced version of the project (if I had the money for the subscription).

The database schema can be found [here]() and a relationship entity diagram [here]().


### Image Storage and Retrieval
Images will be stored locally and retrieved using their relative file path. In a more advanced 
version of this project, images could be stored using Azure Blob Storage or an AWS S3 Bucket (if I
had the money to do so).

### Frontend
This is, primarily, a backend project. The frontend will be developed using React in Typescript for 
my own ease of development.

The primary screens needed for the web application are pages for users to sign-up, login, upload
images, retrieve their images, and list all of the images they have saved.

Mockups of the website can be found [here](./frontend/figma-mockups/).

### Backend
The API is going to be developed using Java and the Spring Boot framework. This is my first time
working with Spring Boot, so a lot of the learning going on during this project will be happening
here.

The backend will require users to have a valid JWT token to access the data. It will be my first
time working on the security aspect of endpoints as well.

### Testing
Frontend tests will occur through manual testing. Meanwhile API calls will be tested in a 
combination of manual tests using Postman and automated integration testing using Github Actions. I 
have limited experience using Github Actions, but learning is what we're doing this for.