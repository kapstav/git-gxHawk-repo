import { LumigoErrors } from "@gxhawk-libs/types/lumigoEnums";
import { S3EventRecord } from "aws-lambda";

import { ExtendedError } from "./customErrors";
import { metricCount, metricTime } from "./logMetric";
const { ENABLE_DEBUG_LOGS } = process.env;

enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
  FATAL = "FATAL",
}
