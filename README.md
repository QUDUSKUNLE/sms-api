# SMS API

SMS API provides a basic SMS functionality. Users can send and receive messages
based on defined criteria.

## Getting Started

Clone the repository

```
$ git clone git@github.com:temmyogunbo/sms-api.git
```

Change directory into the project

```
$ cd sms-api
```

Then install packages

```
$ yarn install
```

Change `.env.sample` to `.env` and add the needed values

Start application

```
$ yarn start:dev
```

### Endpoints

| Endpoint                     | HTTP Method | Description                                |
| ---------------------------- | ----------- | ------------------------------------------ |
| /api/v1/sms/sender/senderId     | GET         | Returns messages a user sent               |
| /api/v1/sms/sender/receiverId | GET         | Returns messages a user has received       |
| /api/v1/contacts                      | POST        | Creates a new contact                         |
| /sms    | POST        | Helps send a message to a defined receiver |
| /contacts/:phoneNumber                   | DELETE      | Delete contact with the provided phone number           |
| /messages/:id                | DELETE      | Delete a specific message                  |

### Documentation

Visit [API DOC](https://web.postman.co/collections/1537976-3a93933d-b56d-45ba-b9fe-1235baeddc41?workspace=eaa04c69-d33c-419e-8ec4-277b0b72514d) for API documentation

### Prerequisites

This application was built with Node js so you'll need the following to get it up and running

- [Node Js](https://nodejs.org/en/download/)
- [Postgres](https://www.postgresql.org/download/)

## Running the tests

Lab is the test framework used for this project
To run tests

```
$ yarn test
```

## Product Limitation

- There is currently no authentication
- No protected routes
- You cannot bulk delete messages or user
- This is just the API no frontend consuming it yet

## Want to Contribute?

- Fork the repository
- Make your contributions
- Ensure your codes follow the [AirBnB Javascript Styles Guide](https://www.gitbook.com/book/duk/airbnb-javascript-guidelines/details)
- Create Pull request against the develop branch.

## Author

- [Emmanuel Ogunbo](https://github.com/temmyogunbo)

## Acknowledgments

- Andela Fellowship (https://andela.com/)

## License

[MIT License](./LICENSE)