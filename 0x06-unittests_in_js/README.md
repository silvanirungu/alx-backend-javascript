**Requirements:**

*   You should be able to run the test suite using `npm test 5-payment.test.js`
*   Every test should pass without any warning
*   You should use only one `spy` to complete this exercise
*   You should use a `beforeEach` and a `afterEach` hooks to complete this exercise

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `5-payment.js, 5-payment.test.js`

-----

### 6\. Async tests with done

mandatory

Look into how to support async testing, for example when waiting for the answer of an API or from a Promise

**Create a new file `6-payment_token.js`:**

*   Create a new function named `getPaymentTokenFromAPI`
*   The function will take an argument called `success` (boolean)
*   When `success` is true, it should return a resolved promise with the object `{data: 'Successful response from the API' }`
*   Otherwise, the function is doing nothing.

**Create a new file `6-payment_token.test.js` and write a test suite named `getPaymentTokenFromAPI`**

*   How to test the result of `getPaymentTokenFromAPI(true)`?

**Tips:**

*   You should be extremely careful when working with async testing. Without calling `done` properly, your test could be always passing even if what you are actually testing is never executed

**Requirements:**

*   You should be able to run the test suite using `npm test 6-payment_token.test.js`
*   Every test should pass without any warning
*   You should use the `done` callback to execute this test

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `6-payment_token.js, 6-payment_token.test.js`

-----

### 7\. Skip

mandatory

When you have a long list of tests, and you can’t figure out why a test is breaking, avoid commenting out a test, or removing it. **Skip** it instead, and file a ticket to come back to it as soon as possible

You will be using this file, conveniently named `7-skip.test.js`
```
    const { expect } = require('chai');
    
    describe('Testing numbers', () => {
      it('1 is equal to 1', () => {
        expect(1 === 1).to.be.true;
      });
    
      it('2 is equal to 2', () => {
        expect(2 === 2).to.be.true;
      });
    
      it('1 is equal to 3', () => {
        expect(1 === 3).to.be.true;
      });
    
      it('3 is equal to 3', () => {
        expect(3 === 3).to.be.true;
      });
    
      it('4 is equal to 4', () => {
        expect(4 === 4).to.be.true;
      });
    
      it('5 is equal to 5', () => {
        expect(5 === 5).to.be.true;
      });
    
      it('6 is equal to 6', () => {
        expect(6 === 6).to.be.true;
      });
    
      it('7 is equal to 7', () => {
        expect(7 === 7).to.be.true;
      });
    });
```    

**Using the file `7-skip.test.js`:**

*   Make the test suite pass **without** fixing or removing the failing test
*   `it` description **must stay** the same

**Tips:**

*   Skipping is also very helpful when you only want to execute the test in a particular case (specific environment, or when an API is not behaving correctly)

**Requirements:**

*   You should be able to run the test suite using `npm test 7-skip.test.js`
*   Every test should pass without any warning

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `7-skip.test.js`

-----

### 8\. Basic Integration testing

mandatory

In a folder `8-api` located at the root of the project directory, copy this `package.json` over.
```
    {
      "name": "8-api",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "./node_modules/mocha/bin/mocha"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "express": "^4.17.1"
      },
      "devDependencies": {
        "chai": "^4.2.0",
        "mocha": "^6.2.2",
        "request": "^2.88.0",
        "sinon": "^7.5.0"
      }
    }
```    

**Create a new file `api.js`:**

*   By using `express`, create an instance of `express` called `app`
*   Listen to port 7865 and log `API available on localhost port 7865` to the browser console when the `express` server is started
*   For the route `GET /`, return the message `Welcome to the payment system`

**Create a new file `api.test.js`:**

*   Create one suite for the index page:
    *   Correct status code?
    *   Correct result?
    *   Other?

**Server**

Terminal 1
```
    bob@dylan:~/8-api$  node api.js
    API available on localhost port 7865
```    

Terminal 2
```
    bob@dylan:~/8-api$  curl http://localhost:7865 ; echo ""
    Welcome to the payment system
    bob@dylan:~/8-api$  
    bob@dylan:~/8-api$ npm test api.test.js
    
    > 8-api@1.0.0 test /root/8-api
    > ./node_modules/mocha/bin/mocha "api.test.js"
    
    
    
      Index page
        ✓ ...
        ✓ ...
        ...
    
      23 passing (256ms)
    
    bob@dylan:~/8-api$
```    

**Tips:**

*   Since this is an integration test, you will need to have your node server running for the test to pass
*   You can use the module `request`

**Requirements:**

*   You should be able to run the test suite using `npm test api.test.js`
*   Every test should pass without any warnings

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `8-api/package.json, 8-api/api.js, 8-api/api.test.js`

-----

### 9\. Regex integration testing

mandatory

In a folder `9-api`, reusing the previous project in `8-api` (`package.json`, `api.js` and `api.test.js`)

**Modify the file `api.js`:**

*   Add a new endpoint: `GET /cart/:id`
*   `:id` must be only a number (validation must be in the route definition)
*   When access, the endpoint should return `Payment methods for cart :id`

**Modify the file `api.test.js`:**

*   Add a new test suite for the cart page:
    *   Correct status code when `:id` is a number?
    *   Correct status code when `:id` is NOT a number (=> 404)?
    *   etc.

**Server**

Terminal 1
```
    bob@dylan:~$ node api.js
    API available on localhost port 7865
```    

Terminal 2
```
    bob@dylan:~$ curl http://localhost:7865/cart/12 ; echo ""
    Payment methods for cart 12
    bob@dylan:~$ 
    bob@dylan:~$ curl http://localhost:7865/cart/hello -v
    *   Trying 127.0.0.1...
    * TCP_NODELAY set
    * Connected to localhost (127.0.0.1) port 7865 (#0)
    > GET /cart/hello HTTP/1.1
    > Host: localhost:7865
    > User-Agent: curl/7.58.0
    > Accept: */*
    > 
    < HTTP/1.1 404 Not Found
    < X-Powered-By: Express
    < Content-Security-Policy: default-src 'none'
    < X-Content-Type-Options: nosniff
    < Content-Type: text/html; charset=utf-8
    < Content-Length: 149
    < Date: Wed, 15 Jul 2020 08:33:44 GMT
    < Connection: keep-alive
    < 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /cart/hello</pre>
    </body>
    </html>
    * Connection #0 to host localhost left intact
    bob@dylan:~$ 
```    

**Tips:**

*   You will need to add a small regex in your path to support the usecase

**Requirements:**

*   You should be able to run the test suite using `npm test api.test.js`
*   Every test should pass without any warning

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `9-api/api.js, 9-api/api.test.js, 9-api/package.json`

-----

### 10\. Deep equality & Post integration testing

mandatory

In a folder `10-api`, reusing the previous project in `9-api` (`package.json`, `api.js` and `api.test.js`)

**Modify the file `api.js`:**

*   Add an endpoint `GET /available_payments` that returns an object with the following structure:

    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
    

*   Add an endpoint `POST /login` that returns the message `Welcome :username` where `:username` is the value of the body variable `userName`.

**Modify the file `api.test.js`:**

*   Add a test suite for the `/login` endpoint
*   Add a test suite for the `/available_payments` endpoint

**Server**

Terminal 1
```
    bob@dylan:~$ node api.js
    API available on localhost port 7865
```    

Terminal 2
```
    bob@dylan:~$ curl http://localhost:7865/available_payments ; echo ""
    {"payment_methods":{"credit_cards":true,"paypal":false}}
    bob@dylan:~$ 
    bob@dylan:~$ curl -XPOST http://localhost:7865/login -d '{ "userName": "Betty" }' -H 'Content-Type: application/json' ; echo ""
    Welcome Betty
    bob@dylan:~$ 
```    

**Tips:**

*   Look at deep equality to compare objects

**Requirements:**

*   You should be able to run the test suite using `npm test api.test.js`
*   Every test should pass without any warning
*   Your server should not display any error

**Repo:**

*   GitHub repository: `alx-backend-javascript`
*   Directory: `0x06-unittests_in_js`
*   File: `10-api/api.js, 10-api/api.test.js, 10-api/package.json`

-----
