"use strict";

let phonebook: any = {
    "William A. Lathan":    "405-709-1865",
    "John K. Miller":	"402-247-8568",
    "Hortensia E. Foster":	"606-481-6467",
    "Amanda D. Newland":	"319-243-5613",
    "Brooke P. Askew":	"307-687-2982"
}

//What is John K. Miller's phone number?
function findPhoneNumber(object: any, string: string) {
    let phoneNumber: string = "";
    Object.keys(object).filter(key => {
        key === string ? phoneNumber = object[key] : key;
      });
    return phoneNumber;
}
//console.log(findPhoneNumber(phonebook, "John K. Miller"));

//Whose phone number is 307-687-2982?
function findOwner(object: any, string: string) {
    let owner: string = "";
    Object.keys(object).forEach(key => {
        let value = object[key];
        value === string ? owner = key : false;
      });
    return owner;
}
console.log(findOwner(phonebook, "307-687-2982"));

//Do we know Chris E. Myers' phone number?
function doesNumberExist(object: any, name: string) {
    return object.hasOwnProperty(name);
}
//console.log(doesNumberExist(phonebook, "Chris E. Myers"));