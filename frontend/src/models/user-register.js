export default class UserRegister {
    constructor(email, password, confirmPassword, firstName, lastName, phoneNumber) {
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.firstName = firstName;
      this.lastName = lastName; 
      this.phoneNumber = phoneNumber;
    }
  }