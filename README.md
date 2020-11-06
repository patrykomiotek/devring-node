# DevRing Workshops

Create node app:

```bash
npm init -y
```

Install nodemon

```bash
npm install nodemon --save-dev
```

Modify `package.json` file - add start script:

```json
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Run with nodemon:

```bash
npm start
```

# Install Babel (optional)

Run command:

```bash
npm install @babel/core @babel/node --save-dev
```

Install presets

```bash
npm install @babel/preset-env --save-dev
```

Create `.babelrc` with:

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Install Express
```bash
npm install express
```

Install body parser:

```bash
npm install body-parser
```

Test your request:

```bash
curl -i -XPOST -d '{"param1": "foo", "param2": "bar"}' -H "Content-Type: application/json" http://localhost:3000/
```

Install

```bash
npm install http-status
```