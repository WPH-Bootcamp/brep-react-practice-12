interface User{
    readonly id:number;
    readonly name:string;
    readonly skills:readonly string[];
    readonly address: {
        city:string
    }
}

const originalUser:User ={
    id:1,
    name:"Bima",
    skills:['Javascript'],
    address: {
        city:"Jakarta"
    }
}

// originalUser.id = 2
// originalUser.name = 2
// originalUser.skills.push("Typescript")
// console.log(originalUser)

// bagian 2 immutable update


function renameUser(user:User, newName:string):User{
    return{
        ...user,
        name:newName
    }
}

const renamedUser = renameUser(originalUser, "Bima Saputra")

console.log("Nama Original", originalUser.name)
console.log("Nama Baru", renamedUser.name)


function addSkill(user:User, newSkill:string):User {
    return {
        ...user,
        skills: [...user.skills, newSkill]
    }
}

const userWithTypeScript = addSkill(originalUser, "Typescript")

console.log("Skill baru:", userWithTypeScript.skills)
console.log("Skill lama:", originalUser.skills)