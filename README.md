# investments-server

Server for the investments project. Just a proxy for Hasura calls to speed up things. In the future this will host the real DB(MySQL)and GraphQL resolvers running on NodeJS/Express.

Main used technologies:
* NodeJS/Express
* Jest
* MySQL (future)
* Apollo Server (future)

There are tests written alread. Check `Api.spec.ts` for a simple unit test (still mocking fetch but won't be like this at the end) and check `QueryDBRoute.spec.ts` for the integration test for the route.

# Running
Just run `npm run start:dev` and send your GraphQL queries to /query
