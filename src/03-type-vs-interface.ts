    // interface User {
    //     id:number;
    //     name:string
    //     email:string
    // }

// const user: User =  {
//     id:1,
//     name:"Alya",
//     email:"alya@example.com"
// }
// console.log(user)

// interface Admin extends User{
//     readonly role : "admin";
//     readonly permissions: readonly string[];
// }

// const admin: Admin = {
//     id:2,
//     name: "Bima",
//     email: "bima@example.com",
//     role:"admin",
//     permissions:["create", "update"]
// }

// console.log(admin)


// bagian 2 - type

type Id = string | number
type Theme = "light" | "dark"

const numericId : Id = 10
const stringId:Id = "USER-10"
const activeTheme:Theme = "dark"

type RequestStatus = "idle" | "loading" | "success" | "error";

function getStatusMessage(status:RequestStatus):string {
    switch(status){
        case "idle":
            return "Request belum dimulai"
        case "loading":
            return "Data sedang dimuat..."
        case "success":
            return "Data berhasil dimulai"
        case "error":
            return "Data gagal dimulai"
    }
}

console.log(getStatusMessage("loading"))
console.log(getStatusMessage("success"))