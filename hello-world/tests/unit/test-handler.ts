"use strict";

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
  Handler,
} from "aws-lambda";

import "mocha";
import { lambdaHandler } from "../../src-ts/app";
import { expect } from "chai";
var event: APIGatewayProxyEvent, context: Context, callback: Callback;

describe("Tests index", function () {
  it("verifies successful response", async () => {
    const result = await lambdaHandler(event, context, callback);

    expect(result).to.be.an("object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.an("string");

    let response = JSON.parse(result.body);
    console.log(response);
    

    expect(response).to.be.an("object");
    expect(response.message).to.be.equal("hello world");
    // expect(response.location).to.be.an("string");
  });
});
