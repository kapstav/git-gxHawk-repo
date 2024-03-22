import { DynamoDB } from 'aws-sdk';


export async function handler(event: any) {
    const dynamoDB = new DynamoDB.DocumentClient();  

        const now = new Date();
        // Format date and time to YYYYMMDDHHMISS format
        const formattedTimestamp = now.toISOString().replace(/[-T:]/g, '').slice(0, 14);
        const numericTimestamp = parseInt(formattedTimestamp, 10);
    // Example DynamoDB operation
    const params: DynamoDB.DocumentClient.PutItemInput = {
        TableName: 'ShopifyOrderData',
        Item: {
            id: numericTimestamp ,
            shopifyorderid:event.detail.payload.id,
            shopifyorderdetail: event.detail
        }
    };

    await dynamoDB.put(params).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Item inserted successfully' })
    };
}
