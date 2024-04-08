
## This file contains information about the provided code, which is a JavaScript script that interacts with an Amazon Web Services (AWS) Simple Storage Service (S3) bucket.

## Table of Contents
1. #### <u>Setup
2. #### Usage
3. #### Functions
    1. #### Upload a File
    2. #### Check if a File Exists
    3. #### Delete a File
4. #### License</u>

## Setup
To run this script, you need to have Node.js and npm installed on your machine. After that, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required packages.
4. Create a `.env` file in the project root directory and add your AWS access key and secret key as follows:

```
AWS_ACCESS_KEY=your_access_key
AWS_SECRET_KEY=your_secret_key
```
5. Save the `.env` file.

## Usage
To execute the script, run `node index.js` in the terminal.

## Functions
The script contains three main functions:

### Upload a File
The uploadFile function uploads a file to the specified S3 bucket with the provided key.

```
const uploadFile = async () => {
  const command = new PutObjectCommand({
    Body: "hello world",
    Bucket: "s3-practice-ak",
    Key: "my-key.txt",
  });
  try {
    const data = await client.send(command);
    console.log(data, "response data");
  } catch (error) {
    console.error(error, "aws response error");
  }
};
```
### Check if a File Exists
The checkFileExists function checks if a file exists in the S3 bucket with the provided key.

```
const checkFileExists = async () => {
  const command = new HeadObjectCommand({
    Bucket: "s3-practice-ak",
    Key: "my-key.txt",
  });
  try {
    const isDataPresent = await client.send(command);
    if (!isDataPresent) throw Error(`The object does not exist`);
    console.log("File found! Last modified date:", isDataPresent);
  } catch (error) {
    console.error(error);
  }
};
```
### Delete a File
The deleteFile function deletes a file from the S3 bucket with the provided key.

```
const deleteFile = async () => {
  const command = new DeleteObjectCommand({
    Bucket: "s3-practice-ak",
    Key: "my-key.txt",
  });
  try {
    const data = await client.send(command);
    console.log(data, "deleted file");
  } catch (error) {
    console.error(error, "aws response error");
  }
};
```
## License
This project is licensed under the MIT License.