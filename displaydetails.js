const demo_URL = "https://course-api.com/react-store-products";
function fetchData(demo_URL, callback) {
    fetch(demo_URL).then((response) => {
        return response.json()
    }).then((data) => {
        callback(data)
    }).catch((error) => {
        console.log("error occured", error)
    })
}
function handleData(data) {
    const objects = document.getElementById("p1");
    objects.innerHTML = "name: " + data[1]["name"] + "<br>price: " + data[1]["price"] + "<br>colors: "
        + data[1]["colors"] + "<br>category:" + data[1]["category"] + "<br>company: " + data[1]["company"]
        + "<br>description: " + data[1]["description"] + "<br>id: " + data[1]["id"] + "<br>shipping: "
        + data[1]["shipping"]
    const imageDisplay = document.getElementById("image")
    imageDisplay.src = data[1]["image"]
}
fetchData(demo_URL,handleData)
