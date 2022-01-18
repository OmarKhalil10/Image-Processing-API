# Image processing API

This project is part of the Udacity Advanced Web Development Nanodegree

## API Reference

#### Verify that the server is working

```http
  GET /
```

### List all images which can be accessed through the endpoint

```http
  GET /api/listImages
```

#### Create thumbnail version of image

```http
  GET /api/images/?filename={filename}&height={height}&width={width}
```

| Parameter  | Type     | Description                                               |
| :--------- | :------- | :-------------------------------------------------------- |
| `filename` | `string` | **Required**. filename of the image to be resized         |
| `height`   | `number` | **Required**.  height                                     |
| `width`    | `number` | **Required**.  width                                      |

## Scripts

* Run Prettier 

```bash
  npm run prettier
```

* Run Eslint

```bash
  npm run lint
```

* Build The Javascript

```bash
  npm run build
```

* Run Jasmine

```bash
  npm run jasmine
```

* Run tests

```bash
  npm run test
```

* Run the Server

```bash
  npm run start
```