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