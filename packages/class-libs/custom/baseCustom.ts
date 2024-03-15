import type { AWS } from '@serverless/typescript';

//import { FIREHOSE_LOGS_ARN } from '../iam/firehoseIAM';
//import { envSelector } from '.';
import { deploymentBucketCustom } from './deploymentBucketCustom';
//import { resourcesCustom } from './resourcesCustom';
//import { resourcesOpenSearch } from './resourcesOpenSearch';
//import { resourcesS3Custom } from './resourcesS3Custom';

export function baseCustom(): AWS['custom'] {
	return {
		serverlessTerminationProtection: {
			stages: ['stg', 'prd'],
		},
		dotenv: {
			logging: false,
		},
		esbuild: {
            bundle: true,
            minify: false,
			sourcemap: true,
            exclude: ['aws-sdk'],
			target: 'node18',
            define: { 'require.resolve': undefined },
            platform: 'node',
            concurrency: 10,
		},
		/*enableThirdPartyLogging: {
			// This needs to be UPPERCASE string of 'TRUE' or 'FALSE'
			disabled: {
				dev: 'FALSE',
				tst: 'FALSE',
				stg: 'FALSE',
				prd: 'FALSE',
				default: 'TRUE',
			},
		},
		logSubscription: {
			destinationArn: FIREHOSE_LOGS_ARN,
			roleArn: 'arn:aws:iam::${aws:accountId}:role/${self:custom.logArchiveRole}',
			enabled: true,
		},*/
		deploymentBucket: {
			// TODO: https://sny-jira.atlassian.net/browse/SIBERIA-4021
			/*accessLog: {
				bucket: '${self:custom.loggingBucket}',
				prefix: 'deploymentBucket-${self:custom.envVarKey}',
			},*/
			...deploymentBucketCustom(),
		},
		//...envSelector(),
		/*...resourcesCustom(),
		...resourcesS3Custom(),
		...resourcesOpenSearch(),*/
	};
}
