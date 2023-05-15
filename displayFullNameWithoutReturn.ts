function displayFullNameWithoutReturn(a: string, b?:string): void{
    b ? console.log(a + " " + b) : console.log(a)
}

displayFullNameWithoutReturn("a")
