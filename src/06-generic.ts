function wrapWithAny(value:any):any {
    return value
}

const anyResult = wrapWithAny("Alya")
console.log("Value:", anyResult + 5)

try {
    console.log(anyResult + 5)
} catch (error:unknown) {
    const message = error instanceof Error ? error.message : "Unknown error"
    console.log("Runtime Error:", message)
}


// solusi nya pake generic type

function wrap<T>(value:T):T {
    return value
}

const wrappedName = wrap("Alya")
const wrappedAge = wrap(20)
const wrappedUser = wrap({id:1, name: "Bima"})

console.log("String: ", wrappedName.toUpperCase())
console.log("Number: ", wrappedAge + 5)