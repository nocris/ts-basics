function displayFullStrangeName(a: string, b?:any): void{
    b ? console.log(a + " " + b) : console.log(a)
}

displayFullStrangeName("Met", ["a", "li", "ca"])