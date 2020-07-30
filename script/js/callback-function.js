// const getCake = () => {
//   let cake = null;
//   console.log("Sedang membuat kue, silahkan tunggu..");
//   setTimeout(() => {
//     console.log("Kue Selesai");
//   }, 3000);
//   return cake;
// }

// const cake = getCake();
// console.log(cake);

const getCake = callback => {
  let cake = null;
  console.log("Sedang membuat kue, silahkan tunggu..");
  setTimeout(() => {
    cake = "kue Selesai";
    callback(cake);
  }, 3000);
}

getCake(cake => {
  console.log(cake);
})