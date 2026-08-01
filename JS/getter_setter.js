class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}lekhraj`
    }
    set password(value){
        this._password= value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }
}
const lekhraj = new User("l@lekhraj.ai", "a2c4")
console.log(lekhraj.password)
console.log(lekhraj.email)