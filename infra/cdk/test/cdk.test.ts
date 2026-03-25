import * as cdk from 'aws-cdk-lib/core'
import { Template } from 'aws-cdk-lib/assertions'
import { describe, expect, it } from 'vitest'

import { CdkStack } from '../lib/cdk-stack'

describe('CdkStack', () => {
  it('synthesizes a CloudFormation template', () => {
    const app = new cdk.App()
    const stack = new CdkStack(app, 'TestStack')

    expect(() => Template.fromStack(stack)).not.toThrow()
  })
})
