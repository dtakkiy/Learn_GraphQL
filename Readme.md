# Learn-GraphQL

Hacker news clone app.

## Install

- prisma migrate
  - `npx prisma migrate dev`

## Usage

`yarn dev`

## Memo

- get
  ```
  query {
    feed {
      id
      url
    }
  }
  ```

- post(create)
  ```
  mutation {
    post (url: "dummy url",
      description: "dummy description"
    ) {
      id
      description
      url
    }
  }
  ```
