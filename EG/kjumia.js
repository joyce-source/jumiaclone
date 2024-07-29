const cooker = [
    {
        image:"../IMG/1.jpg",
        name: "2-Burner Ailyons",
        originalPrice: 3500,
        discountPrice: 3000,
        itemId: "CK1"
    },
    {
        image: "../IMG/2.jpg",
        name: "Gas Oven 4-Burner",
        originalPrice: 23500,
        discountPrice: 19600,
        itemId: "CK2"
    },
    {
        image: "../IMG/3.jpg",
        name: "3-Burner EuroChef",
        originalPrice: 5000,
        discountPrice: 4800,
        itemId: "CK3"
    },
    {
        image: "../IMG/4.jpg",
        name: "3-Burner Roch",
        originalPrice: 8000,
        discountPrice: 6400,
        itemId: "CK4"
    },
    {
        image: "../IMG/5.jpg",
        name: "4-Burner Nunix",
        originalPrice: 4800,
        discountPrice: 4200,
        itemId: "CK5"
    },
    {
        image: "../IMG/6.jpg",
        name: "Infrared 3-Burner",
        originalPrice: 9500,
        discountPrice: 8900,
        itemId: "CK6"
    }

]
cooker.map(cooker=>{
    document.querySelector(".cooker").innerHTML += `
    <div class="items" onclick="navigateToItemPage(\'${cooker.itemId}\')">
                <img src="${cooker.image}">
                <h2 id="name">${cooker.name}</h2>
                <h3 id="original">kshs ${cooker.originalPrice} </h3>
                <h4 id="price">kshs  ${cooker.discountPrice}</h4>
            </div>
    `
})
window.navigateToItemPage =(id)=>{
    window.location.href=`kjumia2.html?${id}`
}