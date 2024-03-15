import type { AWS } from "@serverless/typescript";

import { baseProvider } from "../class-libs/baseProvider";
import { baseCustom } from "../class-libs/custom/baseCustom";

const serverlessConfiguration: AWS = {
  service: "audit",
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-deployment-bucket','serverless-offline'],
  provider: {
    ...baseProvider(), 
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: {
    audit: {
      handler: "index.handler",
      events: [],
    },
  },
  package: {
    individually: true,
    exclude: ["tsc.out"],
    include: ["tsc.out/**/*"],
  },
  custom: {
    ...baseCustom(), 
  },
};

module.exports = serverlessConfiguration;
