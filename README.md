# Nexton Back-End

Nexton Ssr. Fullstack Engineer Challenge



## Run Locally

Clone the project

```bash
  git clone https://github.com/Guidomp11/nexton-backend
```

Go to the project directory

```bash
  cd nexton-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```



## API Reference

#### Resolve Equation

```http
  POST /api/math
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `equation` | `string` | **Required**.  |