import { DynamoDB } from 'aws-sdk';

export async function handler(event: any) {
    const dynamoDB = new DynamoDB.DocumentClient();

    // Example DynamoDB operation
    const params: DynamoDB.DocumentClient.PutItemInput = {
        TableName: 'ShopifyOrderData' ,
        Item: {
            key: '300'
        }
    };

    await dynamoDB.put(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item inserted successfully' })
    };
}
