import type { AWS } from "@serverless/typescript";

import { baseProvider } from "../class-libs/baseProvider";
import { baseCustom } from "../class-libs/custom/baseCustom";

const serverlessConfiguration: AWS = {
  service: "dashboard",
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-deployment-bucket','serverless-offline'],
  provider: {
    ...baseProvider(),
    // name: "aws",
    // runtime: "nodejs18.x",
    // deploymentBucket: { name: "mukund-deploymentcan-stage" },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  functions: {
    dashboard: {
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
    // esbuild: {
    //   bundle: true,
    //   minify: false,
    //   sourcemap: true,
    //   exclude: ["aws-sdk"],
    //   target: "node18",
    //   define: { "require.resolve": undefined },
    //   platform: "node",
    //   concurrency: 10,
    // },
  },
};

module.exports = serverlessConfiguration;
