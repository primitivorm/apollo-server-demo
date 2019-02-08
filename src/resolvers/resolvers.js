import { clients } from './query/clients'

const resolvers = {
    Query: {
        clients
    },
    Mutation: {
        addPerson({input}){
            const uuidv1 = require('uuid/v1')
            var uid = uuidv1()
            return {
                personId: uid,
                name: input.name,
                jobTitle: input.jobTitle,
                email: input.email,
                phone: input.phone,
                mobilePhone: input.mobilePhone,
                countryCode: input.countryCode,
                country: input.country
            }
        }
    }
}

export default resolvers