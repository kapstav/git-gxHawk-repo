import { DynamoDB } from 'aws-sdk';
export const handler = async function (event: any, context: any) {
  const dynamoDB = new DynamoDB.DocumentClient();  
  console.log("Event received", event);
  console.log("Hello from eventbridge.");
};

