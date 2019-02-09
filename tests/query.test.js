import {
    makeExecutableSchema,
    addMockFunctionsToSchema,
    mockServer
  } from 'graphql-tools';
  
  const testclientIDFilter = {
    id: 'Test clientIDFilter',
    query: `
      query {
        clients(clientId="5c5dfef36063c267b3455001") {
           clientId           
           businessName
           status
        }
      }
    `,
    variables: { },
    context: { },
    expected: { data: [{ clientId: "5c5dfef36063c267b3455001",  businessName: "Gutierrez Riley", status: "active"}] }
  };