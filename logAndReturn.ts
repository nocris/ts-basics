function logAndReturn(a: number | string){
    if(typeof a === "number"){
        console.log(a)
        return a.toFixed(2)
    } else if (typeof a === "string"){
        console.log(a)
        return a.match(/b/)
    }

}
console.log(logAndReturn(3))
console.log(logAndReturn("abc"))
