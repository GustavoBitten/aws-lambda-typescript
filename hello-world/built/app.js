"use strict";
// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
let response;
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);
        console.log("Peixe");
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "hello world",
            }),
        };
    }
    catch (err) {
        console.log(err);
        return err;
    }
    return response;
};
//# sourceMappingURL=app.js.map