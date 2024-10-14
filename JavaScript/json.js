let phone = {
  Brand: "Vivo",
  model: "Y28",
  year: "2024",
  price: 15000,
};

for (let i in phone) {
  console.log(i, phone[i]);
}
console.log(Object.values(phone));
console.log(Object.keys(phone));
delete phone["price"];
console.log(phone);

let json = JSON.stringify(phone);
console.log("Json files : ", json);

let json2 = JSON.parse(json);
console.log(json2);

let person = '{ "name":"veeras", "dob": "2001", "phone": "567890"}';

console.log(JSON.parse(person));
