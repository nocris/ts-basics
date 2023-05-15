function displayFullName(a: string, b?:string): string{
    if (b != null && a != null) {
        return a + " " + b
        
    } else return a
}

console.log('full name = ' + displayFullName("Giorgia", "Corti"))
