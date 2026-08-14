const POST_STATUS = {
    DRAFT: "draft",
    PUBLISHED:"published",
    ARCHIVED:"archived",
} as const

console.log(POST_STATUS)
console.log("Published Value:", POST_STATUS.PUBLISHED)

// bagian 2 = type of

type PostStatusObject = typeof POST_STATUS


function printAllStatuses(statuses: PostStatusObject):void {
    console.log("Draft :", statuses.DRAFT)
    console.log("Draft :", statuses.PUBLISHED)
    console.log("Draft :", statuses.ARCHIVED)
}

printAllStatuses(POST_STATUS)

// key of

// hasilnya : "DRAFT" | "PUBLISHED"|"ARCHIVED"

type PostStatusKey = keyof PostStatusObject

function getStatusByKey(key:PostStatusKey):string {
    return POST_STATUS[key]
}

console.log("Key DRAFT :", getStatusByKey("DRAFT"))
console.log("Key DRAFT :", getStatusByKey("PUBLISHED"))
// console.log("Key DRAFT :", getStatusByKey("DELETED"))