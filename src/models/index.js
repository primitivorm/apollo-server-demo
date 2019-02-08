// The persons that can be contacts to clients (complete)
class Person {
    constructor(personId, {name, jobTitle, email, mobilePhone, countryCode, country}) {
        // Id of the person thar is a contact from a client
        this.personId = personId;

        // Name of the person
        this.name = name;

        // Job title of the person
        this.jobTitle = jobTitle;

        // Email of the person
        this.email = email;

        // Landline number of the person
        this.phone = phone;

        // Mobile number of the person
        this.mobilePhone = mobilePhone;

        // Country code in ISO 3166 Alpha-3 (3 characters)
        this.countryCode = countryCode;

        // Country
        this.country = country;
    }
}

export { Person }