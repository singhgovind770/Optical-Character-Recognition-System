# Optical Character Recognition System using Node.js, express.js, tesseract.js, body-parser and multer

OCR Image Upload API
This is an API for performing optical character recognition (OCR) on images uploaded by the user. It uses the Tesseract.js library for performing OCR and the Multer library for handling file uploads.

**Requirements**
To use this API, you will need to have the following installed:
Node.js,
npm

**Installation**
To install this API, follow these steps:

Clone the repository to your local machine:

git clone https://github.com/singhgovind770/Optical-Character-Recognition-System

**Change into the project directory:**
cd Optical-Character-Recognition-System

**Install the required dependencies:**
npm install

**To start the API, run the following command:**
npm start

This will start the API on port 3000 by default. You can change the port by setting the PORT environment variable.

**Endpoints**
GET /
This endpoint returns a JSON response with a greeting message and the request body.

POST /upload
This endpoint accepts an image file upload with the key avatar. The API will perform OCR on the image and return the extracted text in the response.

**Dependencies**
This API relies on the following dependencies:
express,
multer,
body-parser,
tesseract.js,

License
This API is licensed under the MIT License. See the LICENSE file for details.
