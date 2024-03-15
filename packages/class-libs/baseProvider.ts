import type { AWS } from "@serverless/typescript";

export function baseProvider(): AWS["provider"] {
  return {
    stage: "${opt:stage, 'nostage'}",
    deploymentMethod: "direct",
    name: "aws",
    runtime: "nodejs18.x",
    region: "${opt:region, 'us-east-1'}" as AWS["provider"]["region"],
    versionFunctions: false,
    deploymentBucket: {
      name: "com.gxhawk.${self:provider.region}.${self:provider.stage}.deployments",
    },
    tags: {
      //   name: "${self:service}-${self:provider.stage}",
      platform: "gxhawk",
      //   environment: "${self:provider.stage}",
    },
    logs: {
      httpApi: true,
      metrics: true,
      disableDefaultEndpoint: true,
    },
    logRetentionInDays: 180,
  };
}
