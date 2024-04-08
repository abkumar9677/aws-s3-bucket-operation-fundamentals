const { PutObjectCommand, S3Client, HeadObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const dotenv = require("dotenv");

dotenv.config();
const client = new S3Client({
  region: "eu-north-1",
  credentials: { accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY },
});

// upload the file to AWS s3 bucket

(async () => {
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
})();

// searching for the file if exist or not in AWs s3 bucket

(async () => {
  const command = new HeadObjectCommand({
    Bucket: "s3-practice-ak",
    Key: "my-key.txt",
  });
  try {
    const isDataPresent = await client.send(command);
    if (!isDataPresent) throw Error(`The object does not exist`);
    console.log("File found! Last modified date:", isDataPresent);
    // If there's no error it means that the object exists so we can print some details about it
  } catch (error) {
    console.error(error);
  }
})();

//  delete the file from aws s3 bucket

(async () => {
  const command = new DeleteObjectCommand({
    Bucket: "s3-practice-ak",
    Key: "my-key.txt",
  });
  try {
    const data = await client.send(command);
    if (!data) throw new Error("Failed to delete the item as not exist");
    console.log(data, "deleted file");
  } catch (error) {
    console.error(error, "aws response error");
  }
})();
