# Ferret API Documentation and Explanation

This is a simple REST API project built with the [express](https://www.npmjs.com/package/express) http library on top of the [Node.js](https://nodejs.org/en/) runtime.
Built not particularly to be a heavily-used API, but rather to be a showcase of particular ideas for job seeking reasons.

In this application, there are two webservers being ran, one is a REST API that return JSON objects containing links to random ferret images. The other is a frontend webserver that serves a simple demo page with some documentation on it. The webpage makes AJAX calls to the API which then communicates back to the frontend server to grab statically served images. It is fairly convoluted and not a real world usage for such static behavior, but it does show concepts and basic understanding of API flow and communications.

## Technologies Used

- Node.js
- Express.js
- REST
- Markdown
- SQL
- Cache
- Git

## Installing

THIS IS DOES NOT NEED TO BE DONE FOR DEMO PURPOSES.
I host a live version of this app for demo purposes on my personal [site](https://ferret.canarado.xyz/).

You will need Node.js v16 or above and `npm` or `yarn`.

Download this repo, and install node_modules with `yarn install` or `npm install`.

Create a `config.js` and setup necessary configuration options. See config options [here](#config).

Run both frontend and api with `npm run start`.

## Contributions and Issues

Since this is a fairly simple project, I will not be accepting contributions, but I will be looking at any issues and fixing accordingly.

## <a name="config"></a>Configuration Options

```js
module.exports = {
    // Port that the API should be listening on
    // default - 4582
    // number
    apiPort: 1337,

    // Port that the frontend server should be listening on
    // default - 4583
    //number
    webPort: 1338,

    // Default domain for your webpage application
    // Be sure this is the full domain
    // default - http://localhost:4583/
    // string
    webUrlName: 'http://localhost:1338/',
}
```