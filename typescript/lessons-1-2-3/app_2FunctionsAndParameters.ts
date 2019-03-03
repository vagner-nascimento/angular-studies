let isEnothToBeatLambourginni = function (kmHr: number): boolean {
    return kmHr > 350;
}

let distance = 400

/* 
    Template String (from ECMA Script 5): Uses crazes "` `" to start and end a string, 
    so you can call variables, methods and expressions usign "${}". Like the example below.
*/
console.log(`Is ${distance} km/H enough to beat Lambourginni? ${isEnothToBeatLambourginni(distance) ? "YES" : "NO"}`)

//Arrow function, slim, more elegant, seems like lambda functions of C# and Java
let call = (name: string) => console.log(`Do you copy ${name}?`);
call("Black Kaiser")

//Default parameters
function inc (speed: number, inc: number = 1): number {
    return speed + inc
}
console.log(`inc(5, 1) = ${inc(5, 1)}`);
console.log(`inc(5) = ${inc(5)}`);
