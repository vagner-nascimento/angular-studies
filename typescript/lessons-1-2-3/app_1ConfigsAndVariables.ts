let message: string = "Hello world, i'm the first app in typescript wroth by VN"
console.log(message)

let episode: number = 6
//episode = "5"
/*
NOTE: BE CAREFUL: The transpulition accepts that.
 But it will make the var assuming string type, so when make a sum, it will concatenate strings.
 You can change this behavior adding a new configuration on tsconfig.json:
  {
     "compilerOptions": {
       "noEmitOnError": true
     }
  }
  then the node will note create the js files, it will not compile with TS errors
*/
console.log("Actual ep: " + episode)
episode = episode + 1
console.log("Next ep: " + episode)

/*
 NOTE: the declaration above makes the varible type "any"
 Same to "let favotiteBeach: any"
*/ 
let favotiteBeach
favotiteBeach = "Venice"
//favotiteBeach = 10
console.log("My favorite beach is " + favotiteBeach)
