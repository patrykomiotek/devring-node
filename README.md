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
