
# Follow below steps for setup

```shell
git clone https://github.com/PranshuBasak/graphql_practice.git
```

## To start the Graphql Server

```shell
cd server
npm run dev
```

> This will start server using nodemon, the main entry file is `index.js`
> on [http://localhost:4000/](http://localhost:4000/)



## To start the Frontend

```shell
//open a new shell
cd client
npm run dev
```

> This will start the frontend using vite framework 
> on [http://localhost:5173/](http://localhost:5173/)

![[Pasted image 20240304012844.png]]

## GraphQl Schema

```js
type User {

        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favouriteMovie: [Movie]
    }
    type Movie{
        id: ID!
        name: String!
        releaseDate: Int!
        isInTheaters: Boolean!
    }
    type Query {
        hello: String
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie!
    }
    input CreateUserInput{
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = INDIAN
    }
    input UpdateUserInput{
        id: ID!
        newUsername: String!
        newName: String!
    }
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUserName(input: UpdateUserInput!): User
        deleteUser(id: ID!): User
    }
    enum Nationality {
        LEBANESE
        JAPANESE
        INDIAN
        ... All Coutnries are added
}

```

