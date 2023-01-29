const axios = require("axios)")


const tableau = fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    headers : {'Content-Type':'application/json'},
    body : JSON.Stringify(data)
})
.then(data => data.json())
.then(data => {console.log(data)})
.then(data => data)

axios.get("https://jsonplaceholder.typicode.com/posts", data)
.then(resu => {console.log(resu.data)})