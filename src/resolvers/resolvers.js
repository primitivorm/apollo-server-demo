import { clients } from './query/clients'

const resolvers = {
    Query: {
        clients(parent, args, ctx, info) {
        if(!args.clientId){
            return clients
        }
        return clients.filter((client) => {
            return client.id.includes(args.clientId)
        })
        }
    },
    Mutation: {
        addPerson(_, {input}, context){
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