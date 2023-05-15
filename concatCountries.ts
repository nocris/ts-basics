function concatCountries(a: Array<string>){
    let b = ""
    for (let index = 0; index < a.length; index++) {
        b += a[index];        
    }
    return b
}

console.log(concatCountries(["France", "USA", "Brazil"]))