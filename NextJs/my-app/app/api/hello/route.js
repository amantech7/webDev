export async function GET(request) {
    const data = 
        [
            { name: "john", age: 23 },
            { name: "doe", age: 25 } ,
            { name: "smith", age: 30 },
            { name: "jane", age: 28 }
        ]

    return new Response(JSON.stringify(data));
    console.log("data is render to  url")

}