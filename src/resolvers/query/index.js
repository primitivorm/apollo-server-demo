import { Person } from '../../models/index'

const person = (obj, args, context)  => {
    var personId = 1
    //... find in database
    return new Person(1, "Primitivo", "Team Lead", "primitivo@example.com", "5512345678", "01", "Mexico")
}

export { person }