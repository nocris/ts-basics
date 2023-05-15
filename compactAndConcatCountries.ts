function compactAndConcatCountries(a: Array<string | boolean>): string{
    let b = ""
    for (let index = 0; index < a.length; index++) {
        if (typeof a[index]=== "string") {
            b += a[index];        
            
        }
            
        
    }
    return b

}

console.log(compactAndConcatCountries(["France", "USA", false, "Brazil", true]))