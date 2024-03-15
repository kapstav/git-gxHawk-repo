import { AWS } from '@serverless/typescript';

export function envSelector(): AWS['custom'] {
	return {
		envVarKeyOptions: {
			dev: 'dev',
			tst: 'tst',
			stg: 'stg',
			prd: 'prd',
			default: 'default',
		},
		envVarKey:
			'${self:custom.envVarKeyOptions.${self:provider.stage}, self:custom.envVarKeyOptions.default}',
	};
}