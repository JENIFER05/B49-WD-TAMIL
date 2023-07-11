class Person {
    constructor(firstName, lastName, age, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
      this.fullName =(firstName+' '+lastName);
    }
  }

  const person = new Person('John', 'Doe', 25, '123 Main St');
  
  console.log(person.fullName);    // Output: John Doe
  console.log(person.age);         // Output: 25
  console.log(person.address);     // Output: 123 Main St
  