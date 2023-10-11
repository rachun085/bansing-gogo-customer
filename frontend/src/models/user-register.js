export default class UserRegister {
    constructor(email, password, confirmPassword, firstName, lastName, phoneNumber, cardId, addressNo, soi, moo, street, tumbon, amphoe, province, zipCode, titleName) {
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.firstName = firstName;
      this.lastName = lastName; 
      this.phoneNumber = phoneNumber;
      this.cardId = cardId;
      this.addressNo = addressNo;
      this.soi = soi;
      this.moo = moo;
      this.street = street;
      this.tumbon = tumbon;
      this.amphoe = amphoe;
      this.province = province;
      this.zipCode = zipCode;
      this.titleName = titleName;
    }
  }