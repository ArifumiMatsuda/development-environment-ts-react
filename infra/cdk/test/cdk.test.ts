import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { describe, expect, it } from "vitest";

import { CdkStack } from "../lib/cdk-stack";

describe("CdkStack", () => {
  it("synthesizes a CloudFormation template", () => {
    const app = new App();
    const stack = new CdkStack(app, "TestStack");

    expect(() => Template.fromStack(stack)).not.toThrow();
  });
});
