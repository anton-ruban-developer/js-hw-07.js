const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  city: "New York",
};

function personInfo(person) {
  const { name, age, email, city } = person;
  console.table(person);
  const fullName = `${name} ${age}`;
  const contact = `${email},${city}`;
  const data = { fullName, contact };
  return data;
}
console.table(personInfo(person));