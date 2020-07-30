// const user = {
//   firstName: "Jefri",
//   lastName: "Hermanto",
//   age: 22
// }

// console.log("Nama: " + user.firstName + " " + user.lastName + ", umur:" + user.age + " tahun");

const user = {
  firstName: "Jefri",
  lastName: "Hermanto",
  age: 22
}

// console.log(`Nama: ${user.firstName} ${user.lastName} umur:${user.age} tahun`);


const admin = {
  name: "Jane",
  position: "Marketing"
}

const message = `Dear ${user.firstName} ${user.lastName}


Selamat ulang tahun yang ke-${user.age} semoga selalu diberikan kesehatan.

Best Regards,
${admin.name}
${admin.position}`;

console.log(message);