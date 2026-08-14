// bagian 1
// function uppercaseNameWithAny(data:any):string {
//   return data.name.toUpperCase();
// }
// console.log(uppercaseNameWithAny({name: "Alya"}))

// console.log("\n2. any dengan data yang salah")

// try {
//   console.log(uppercaseNameWithAny({name: 123}))
// } catch (error:unknown) {
//   console.log("Terjadi error runtime", getErrorMessage(error))
// }

// function getErrorMessage(error:unknown):string {
//   return error instanceof Error ? error.message : "Unknown error";
// }

// bagian 2 (unknown)

function isRecord(value:unknown):value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function upperCaseNameWithUnknown(data:unknown):string {
  // return data.name.toUpperCase();
  if(!isRecord(data)) {
    throw new Error("Data is not a record");
  }

  const name = data["name"];

  if(typeof name !== 'string') {
    throw new Error("name harus berupa string")
  }

  return name.toUpperCase()
}

console.log(upperCaseNameWithUnknown({name:"Bima"}))


// bagian 3


const jsonFromApi = '{"name":"citra", "age": 30}';

const parsedData:unknown = JSON.parse(jsonFromApi)

console.log(upperCaseNameWithUnknown(parsedData))