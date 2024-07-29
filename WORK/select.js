const phones = [
    {
        image:"./a23.png",
        name: "Samsung Galaxy A23",
        originalPrice: 27299,
        discountPrice: 22299,
        itemId: "B001"
    },
    {
        image: "./a33.png",
        name: "Samsung Galaxy A33 5G",
        originalPrice: 36499,
        discountPrice: 34499,
        itemId: "B002"
    },
    {
        image: "./a54.png",
        name: "Samsung Galaxy A54 5G",
        originalPrice: 45499,
        discountPrice: 44499,
        itemId: "B003"
    },
    {
        image: "./a74.png",
        name: "Samsung Galaxy A74 5G",
        originalPrice: 55499,
        discountPrice: 53499,
        itemId: "B001"
    }  
]
const selectedItem=decodeURIComponent(window.location.search)
const selectId=selectedItem.substring(1)
console.log(selectId)
console.log(selectedItem)
document.getElementById('display').innerText = selectId
switch(true){
    case selectId===phones[0].itemId:
        document.getElementById('image').src=phones[0].image
        document.getElementById('name').innerText=phones[0].name
        document.getElementById('original').innerText=phones[0].originalPrice
        document.getElementById('price').innerText=phones[0].discountPrice
        calculateTotal(phones[0].discountPrice)
        break;
    case selectId===phones[1].itemId:
        document.getElementById('image').src=phones[1].image
        document.getElementById('name').innerText=phones[1].name
        document.getElementById('original').innerText=phones[1].originalPrice
        document.getElementById('price').innerText=phones[1].discountPrice
        calculateTotal(phones[1].discountPrice)
        break;
    case selectId===phones[2].itemId:
        document.getElementById('image').src=phones[2].image
        document.getElementById('name').innerText=phones[2].name
        document.getElementById('original').innerText=phones[2].originalPrice
        document.getElementById('price').innerText=phones[2].discountPrice
        calculateTotal(phones[2].discountPrice)
        break;
    case selectId===phones[3].itemId:
        document.getElementById('image').src=phones[3].image
        document.getElementById('name').innerText=phones[3].name
        document.getElementById('original').innerText=phones[3].originalPrice
        document.getElementById('price').innerText=phones[3].discountPrice
        calculateTotal(phones[3].discountPrice)
        break;
}
function calculateTotal(price){
    document.getElementById('quantity').onkeyup =()=>{
        let amount = parseInt(price)
        let quantity = document.getElementById('quantity').value
        if(quantity>1){
            const total = parseInt(quantity) * amount
            document.getElementById('total').innerText = total
            delivery(total)
        }else{
            const total = amount
            document.getElementById('total').innerText = total
            delivery(total)
        }
    }
}
function delivery(total){
    document.getElementById('location').onchange =()=>{
        let nairobi = 500
        let mombasa = 1500
        let thika = 1000
        let location = document.getElementById('location').value
        switch (location){
            case 'nairobi':
                document.getElementById('total').innerText = `total: ${total + nairobi}`
            break;
            case 'mombasa':
                document.getElementById('total').innerText = `total: ${total + mombasa}`
            break;
            case 'thika':
                document.getElementById('total').innerText = `total: ${total + thika}`
            break;
            default:
                document.getElementById('total').innerText = `total ${total}`
        }
    }

}