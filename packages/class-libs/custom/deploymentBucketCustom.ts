import { AWS } from '@serverless/typescript';

export const RESOURCE_NAMING_PREFIX = 'gxhawk';

export function deploymentBucketCustom(): AWS['custom'] {
	return {
		versioning: true,
		blockPublicAccess: true,
		policy: {
			Version: '2012-10-17',
			Statement: [
				{
					Effect: 'Deny',
					Principal: '*',
					Action: 's3:*',
					Resource: [
						'arn:aws:s3:::${self:provider.deploymentBucket.name}',
						'arn:aws:s3:::${self:provider.deploymentBucket.name}/*',
					],
					Condition: {
						Bool: {
							'aws:SecureTransport': 'false',
						},
					},
				},
			],
		},
	};
}