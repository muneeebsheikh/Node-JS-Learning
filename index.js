
// #region 41 Network I/O =============================================================================== 41

// https does not use thread pool
// https is async but its an network dependent task not CPU dependant
// therefore, Node.js handle async task in 2 ways, 1. Native async mechanism and 2. Thread pool
// since this part is handled by kernel, there is different mechanisms for different OS. 
// Linux => epoll
// MacOS => Kqueue
// Windows => IO Completion Port

let https = require("node:https")

process.env.UV_THREADPOOL_SIZE = 2; // set thread pool size => donot exceed to the number of cpu cores, my CPU at the time has 2 cores
const MAX_CALLS = 12; // default thread ppool size of libuv is 4 threads

const start = Date.now();

for(let i = 0; i < MAX_CALLS; i++){
    https.request("https://www.google.com/", res => {
        res.on("data", ()=>{});
        res.on("end", ()=>{
            console.log(`Request ${i} ${Date.now() - start}`)
        });
    })
    .end();
}


// #endregion
// #region 40 Thread Pool Size =============================================================================== 40

// const crypto = require("node:crypto")

// // NOTE: increasing the thread pool size can help with performance but that is limited by the number of CPU cores

// process.env.UV_THREADPOOL_SIZE = 2; // set thread pool size => donot exceed to the number of cpu cores, my CPU at the time has 2 cores
// const MAX_CALLS = 2; // default thread ppool size of libuv is 4 threads

// const start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", ()=>{
//         console.log(`HASH: ${i + 1}`, Date.now() - start);
//     })
// }

// #endregion

// #region 39 Thread Pool =============================================================================== 39

// const crypto = require("node:crypto")
// // parallel execution // runs in separate threads in libuv
// const MAX_CALLS = 3;

// const start = Date.now();

// for(let i = 0; i < MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", ()=>{
//         console.log(`HASH: ${i + 1}`, Date.now() - start);
//     })
// }

// // sequencial execution
// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // password based key function 2 // cpu intensive method which is offloaded to thread pool
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512"); // password based key function 2 // cpu intensive method which is offloaded to thread pool
// console.log("Hash: ", Date.now() - start);




// const fs = require("node:fs");

// //'libuv' has a thread pool which can be associated to do the asynchronous tasks

// console.log("first")
// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     if(err) console.log(err);
//     else console.log(data);
// });
// console.log("last")

// #endregion

// #region 35 HTTP Routing =============================================================================== 35

// const https = require("node:https");
// const fs = require("node:fs");

// const server = https.createServer((req, res)=> {
//     const url = req.url
//     if(url === "/"){
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.end("Home Page")
//     }
//     else if(url === "/about"){
//         res.writeHead(200, {"Content-type": "text/plain"})
//         res.end("About Page")
//     }
//     else if(url === "/api"){
//         res.writeHead(200, {"Content-type": "application/json"})
//         res.end(JSON.stringify({
//             firstname: "muhammad",
//             lastname: "muneeb"
//         }))
//     }
//     else{
//         res.writeHead(404);
//         res.end("Page not found");
//     }
// });

// const port = 3000;

// server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });

// #endregion

// #region 34 HTML Template =============================================================================== 34

// const https = require("node:https");
// const fs = require("node:fs");

// const server = https.createServer((req, res)=> {
//     const name = "Muneeb"; 
//     res.writeHead(200, {"Content-type": "text/html"});
//     let html = fs.readFileSync("./index.html", "utf-8");
//     html = html.replace("{{name}}", name);
//     res.end(html);

// });

// const port = 3000;

// server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });

// #endregion

// #region 33 HTML Response =============================================================================== 33
// const https = require("node:https");
// const fs = require("node:fs");

// const server = https.createServer((req, res)=> {
//     res.writeHead(200, {"Content-type": "text/html"});
//     fs.createReadStream(__dirname + "/index_33.html").pipe(res);
//     // const html = fs.readFileSync("./index_33.html", "utf-8");
//     // res.end(html);
// });

// const port = 3000;

// server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });

// #endregion

// #region 32 JSON Response =============================================================================== 32

// const https = require("node:https");

// const server = https.createServer((req, res)=> {
//     const obj = {
//         firstName: "Muhammad",
//         lastName: "Muneeb"
//     }
//     res.writeHead(200, {"Content-type": "application/json"});
//     res.end(JSON.stringify(obj));
// });

// const port = 3000;

// server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });

// #endregion

// #region 30 HTTP Module && 31 Creating a Node Server =============================================================================== 30, 31

// const https = require("node:https");

// const server = https.createServer((req, res)=> {
//     res.writeHead(200, {"Content-type": "text/plain"});
//     res.end("Hello World")
// });

// const port = 3000;

// server.listen(port, ()=>{
//     console.log(`Server running on port ${port}`);
// });


// #endregion

// #region 29 Pipes =============================================================================== 29

// const fs = require("node:fs");
// const zlib = require("node:zlib"); // zlib is for zipped files, it has a built-in transform stream

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2 //size of chunk in bytes
// });
// const writeableStream = fs.createWriteStream("./file2.txt");

// // pipes returns destination streams which enables chaining 
// // but it requires readable or duplex or transform steams and not writeable streams
// readableStream.pipe(writeableStream); // cannot chain because it a writeable stream 


// readableStream.pipe(gzip).pipe(fs.createWriteStream("./file2.txt.gz"));



// #endregion

// //#region 28 Streams =============================================================================== 28

// const fs = require("node:fs");

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2 //size of chunk in bytes
// });
// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk)=> {
//     console.log(chunk);
//     writeableStream.write(chunk);
// })

//types

//Readable, writeable, duplex, treansform

// reading from a file as readable stream
// writing to a file as writeable stream
// sockets as a duplex stream
// file compression where you can write compressed data to a file or read de-compressed data to and from a file as a transform stream
// #endregion

// #region 27 (File System)fs Promise Module =============================================================================== 27

/// the callback version(in 26) is more prefereable if performance is a concern for both execution time and memory allocation  


// const fs = require("node:fs/promises") // if performance is not a major concern stick with promises

// async function readFile(){
    //     try{
        //         const data = await fs.readFile("file.txt", "utf-8");
//         console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// readFile();


// console.log("first")

// fs.readFile("file.txt", "utf-8") // this is asynchronous
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// console.log("second");
// #endregion

// //#region 26 (file system)fs Module =============================================================================== 26

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
// #endregion

// //#region 25 Ansynchronous JS =============================================================================== 25

// JS is synchronous, blocking and single-threaded.



// 23: Character Sets and Encoding && 24 Streams and Buffers =============================================================================== 23, 24


// "V".charCodeAt() // 86 - UNICODE

// streams are sequence of data that is being moved from one point to another over time
// like stream of data from one file to another

// steams of data in chunks prevents unnecessry data downloads and memory usage.

// const buffer = new Buffer.from("muneeb")

// buffer.write("Codevolution");

// console.log(buffer.toJSON());
// console.log(buffer);
// console.log(buffer.toString());
// #endregion

// //#region 22: Extending from EventEmitter =============================================================================== 22

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
// #endregion

// //#region 21: EVENTS MODULE  =============================================================================== 21

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
// #endregion

