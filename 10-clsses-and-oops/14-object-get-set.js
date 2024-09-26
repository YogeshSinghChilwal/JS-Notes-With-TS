const User = {
    _email: "Yogesh@",
    _password: 123,

    get  email() {
        return this._email.toLocaleUpperCase()
    },

    set email(value){
        this._password = value
    }
}

User._email = "123@"
console.log(User._email);

const newUser = Object.create(User)
console.log(newUser.email)