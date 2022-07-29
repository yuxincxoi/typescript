type Potato = {
    <T>(arr: T[]): T
}
type Tomato = {
    <T>(arr: T[], item: T): T[]
}

const last: Potato = (arr) => arr[arr.length-1]
const prepend: Tomato = (arr, item) => [item, ...arr]
