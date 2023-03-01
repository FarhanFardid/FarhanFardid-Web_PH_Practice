const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  document.getElementById('num_person').innerText = person.message;
  document.getElementById('p1_name').innerText = person.result[0].name.common;
  document.getElementById('p1_age').innerText =person.result[0].age;
  document.getElementById('p1_street').innerText =person.result[0].address.street + ', House No: ' + person.result[0].address.house;
  document.getElementById('p2_name').innerText = person.result[1].name.common ; 
  document.getElementById('p2_age').innerText =person.result[1].age;
  document.getElementById('p2_street').innerText =person.result[1].address.street + ', House No: ' + person.result[1].address.house;