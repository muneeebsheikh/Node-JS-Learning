
// 27 (File System)fs Promise Module =============================================================================== 27

/// the callback version(in 26) is more prefereable if performance is a concern for both execution time and memory allocation  


const fs = require("node:fs/promises") // if performance is not a major concern stick with promises

async function readFile(){
    try{
        const data = await fs.readFile("file.txt", "utf-8");
        console.log(data);
    }
    catch(err){
        console.log(err)
    }
}
readFile();


// console.log("first")

// fs.readFile("file.txt", "utf-8") // this is asynchronous
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// console.log("second")



// 26 (file system)fs Module =============================================================================== 26

// const fs = require("node:fs");

// console.log("first")
// const contents = fs.readFileSync("./file.txt", "utf-8");
// console.log(contents);

// console.log("second")
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });
// console.log("third")


// fs.writeFileSync("./greet.txt" , "Hello world")

// fs.writeFile("./greet.txt", "Hello Muneeb", {flag: "a"}, (err)=>{
//     if(err) console.log(err);
//     else console.log("File written.");
// });



// 25 Ansynchronous JS =============================================================================== 25

// JS is synchronous, blocking and single-threaded.



// 23: Character Sets and Encoding && 24 Streams and Buffers =============================================================================== 23, 24


// "V".charCodeAt() // 86 - UNICODE

// streams are sequence of data that is being moved from one point to another over time
// like stream of data from one file to another

// steams of data in chunks prevents unnecessry data downloads and memory usage.

// const buffer = new Buffer.from("muneeb")

// buffer.write("Codevolution");

// console.log(buffer.toJSON())
// console.log(buffer)
// console.log(buffer.toString())



// 22: Extending from EventEmitter =============================================================================== 22

// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();


// pizzaShop.on(`order`, (size, topping)=>{
//     console.log(`Baking a ${size} Pizza with ${topping}`);
//     drinkMachine.serveDrink(size);
// })

// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();


// 21: EVENTS MODULE  =============================================================================== 21

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping)=>{
//     console.log(`Baking Pizza a ${size} with ${topping}`);
// })

// emitter.on("order-pizza", (size)=>{
//     if(size === "large")
//         console.log("Serving complimentary drink");
// })


// emitter.on("pizza-baked", ()=>{
//     console.log("Pizza ready to deliver");
// });

// console.log(`some work before event occurs`);
// emitter.emit("order-pizza", "large", "mushroom");
// emitter.emit("pizza-baked");


