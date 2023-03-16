export async function onRequestGet(request:Request) {
    const dateToday = new Date()
    const html = `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=deviceg-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Current time ${dateToday}</h1>
</body>
</html>
    `
    
    return new Response(html,{
        "headers" :{
            "Content-Type": "text/html"
        }
    })
}