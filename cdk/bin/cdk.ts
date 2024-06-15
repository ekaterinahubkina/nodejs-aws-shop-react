#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { WebPageStack } from "../lib/cdk-stack";

const app = new cdk.App();
new WebPageStack(app, "WebPageStack", { tags: { createdBy: "ekaterina.hubkina" } });
