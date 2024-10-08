// // method - 1
// document.getElementById("fetch-img").addEventListener("click", function () {
//     let xhr = new XMLHttpRequest()
//     xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true)
//     xhr.onload = function () {
//         console.log(this.status)
//         if (this.status === 200 || this.status === 201) {
//             console.log("Image Fetched Successfully")
//             let response = JSON.parse(this.responseText)
//             console.log(response)
//         } else {
//             console.log("Error! Image could not fetched.")
//         }
//     }
//     xhr.send()
// })


// // method - 2
// document.getElementById("fetch-img").addEventListener("click", function () {
//     let promise = fetch("https://dog.ceo/api/breeds/image/random")
//     promise.then((response) => {
//         console.log(response.status)
//         return response.json()
//     }).then((imgData) => {
//         console.log(imgData)
//     })
// })


document.getElementById("fetch-img").addEventListener("click", function () {

    let promise = fetch("https://dog.ceo/api/breeds/image/random")

    promise.then((response) => {
        console.log(response.status)
        return response.json()
    }).then((imgData) => {
        console.log(imgData)
        const imgContainer = document.getElementById("img-container")
        imgContainer.classList.remove("d-none")
        const dogImage = document.createElement("img")
        dogImage.src = imgData.message
        imgContainer.appendChild(dogImage)
    }).catch((error) => {
        console.log(error)
    })

    this.style.display = "none"
})