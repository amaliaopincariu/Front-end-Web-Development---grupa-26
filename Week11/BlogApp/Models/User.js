class User {
    //call to API to fetch data
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}