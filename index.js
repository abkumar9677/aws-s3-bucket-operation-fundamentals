const { PutObjectCommand, S3Client, HeadObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  region: "eu-north-1",
  credentials: { accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY },
};
// const client = new S3Client(config);
// const SES_Client = new SESClient(config);
// const SNS_Client = new SNSClient(config);

// upload the file to AWS s3 bucket

// (async () => {
//   const command = new PutObjectCommand({
//     Body: "hello to the new world",
//     Bucket: "s3-practice-ak",
//     Key: "my-key.txt",
//   });
//   try {
//     const data = await client.send(command);
//     console.log(data, "response data");
//   } catch (error) {
//     console.error(error, "aws response error");
//   }
// })();

// searching for the file if exist or not in AWs s3 bucket

// (async () => {
//   const command = new HeadObjectCommand({
//     Bucket: "s3-practice-ak",
//     Key: "my-key.txt",
//   });
//   try {
//     const isDataPresent = await client.send(command);
//     if (!isDataPresent) throw Error(`The object does not exist`);
//     console.log("File found! Last modified date:", isDataPresent);
//     // If there's no error it means that the object exists so we can print some details about it
//   } catch (error) {
//     console.error(error);
//   }
// })();

//  delete the file from aws s3 bucket

// (async () => {
//   const command = new DeleteObjectCommand({
//     Bucket: "s3-practice-ak",
//     Key: "my-key.txt",
//   });
//   try {
//     const data = await client.send(command);
//     if (!data) throw new Error("Failed to delete the item as not exist");
//     console.log(data, "deleted file");
//   } catch (error) {
//     console.error(error, "aws response error");
//   }
// })();

// send email notification

//   (async () => {
//     const command = new SendEmailCommand({
//       Destination: {
//         ToAddresses: [process.env.DESTINATION_MAIL],
//       },
//       Message: {
//         Body: {
//           Html: {
//             Charset: "UTF-8",
//             Data: "<h1>Hello World!</h1>",
//           },
//           Text: {
//             Charset: "UTF-8",
//             Data: "Hello World!",
//           },
//         },
//         Subject: {
//           Charset: "UTF-8",
//           Data: "Hello World!",
//         },
//       },
//       Source: "<EMAIL>",
//     });
//     try {
//       const data = await SES_Client.send(command);
//       console.log(data, "sending data");
//     } catch (error) {
//       console.error(error, "aws sending error");
//     }
//   }
// )();

// (async () => {
//   const command = new PublishCommand({
//     TopicArn: process.env.TOPIC_ARN,
//     Message: JSON.stringify({
//       subject: "Hello World!",
//       body: "Hello World!",
//     }),
//   });
//   try {
//     const data = await SNS_Client.send(command);
//     console.log(data, "sending sns data");
//   } catch (error) {
//     console.error(error, "aws sending sns error");
//   }
// })();
