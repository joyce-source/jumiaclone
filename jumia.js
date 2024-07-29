const phones = [
    {
        image:"../IMG/a23.png",
        name: "Samsung Galaxy A23",
        originalPrice: 27299,
        discountPrice: 22299,
        itemId: "B001"
    },
    {
        image: "../IMG/a33.png",
        name: "Samsung Galaxy A33 5G",
        originalPrice: 36499,
        discountPrice: 34499,
        itemId: "B002"
    },
    {
        image: "../IMG/a54.png",
        name: "Samsung Galaxy A54 5G",
        originalPrice: 45499,
        discountPrice: 44499,
        itemId: "B003"
    },
    {
        image: "../IMG/a74.png",
        name: "Samsung Galaxy A74 5G",
        originalPrice: 55499,
        discountPrice: 53499,
        itemId: "B001"
    }  
]
phones.map(phone=>{
    document.querySelector(".phones").innerHTML += `
    <div class="samsung" id="phone1" onclick="navigateToItemPage(\'${phone.itemId}\')">
                <img src="${phone.image}" alt="" id="image1">
                <h2 id="name1">${phone.name}</h2>
                <h3 id="price1">kshs ${phone.originalPrice} </h3>
                <h4 id="original1">kshs  ${phone.discountPrice}</h4>
            </div>
    `
})
window.navigateToItemPage =(id)=>{
    window.location.href=`select.html?${id}`
}