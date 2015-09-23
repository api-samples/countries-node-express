A `Node.js` and `Express.js` version of the Countries API example.

Developed using Node v4.1.0.

Babel.JS for ES6 compatibility. lodash for utilities. Mocha for testing. eshint for linting.

    npm install
    npm run-script lint
    npm test
    npm start

Point your browser to http://localhost:3000/countries/FI

If you have trouble installing Node 4.1.0, but have access to Docker, you can try:

    ./in-docker.sh npm run-script lint

or just

    docker run -it --rm -v `pwd`:/app -w=/app node:4.1.0 -p 3000:3000 npm start
