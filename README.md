# apollo-server-demo
Demo for apollo

## Install
`npm install`

## Run
`npm run start`

## Ejemplos

### Query

```
query {
clients {
  clientId
  clientNumber
  taxId
  businessName
  commercialName
  countryCode
  status
  contacts {
    personId
    phone
    email
  }
}
}
```

### Mutation

```
mutation {
  addPerson(input: {
    name: "Primitivo RM",
    jobTitle: "Team Lead",
    email: "primitivo@example.com",
    phone: "55 12345678",
    mobilePhone: "55 987654321",
    countryCode: "cdmx",
    country: "Mexico"
  }) {
    personId
  }
}






```