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
const selectedItem=decodeURIComponent(window.location.search)
const selectId=selectedItem.substring(1)
console.log(selectId)
console.log(selectedItem)
document.getElementById('show').innerText = selectId
switch(true){
    case selectId===cooker[0].itemId:
        document.getElementById('image').src=cooker[0].image
        document.getElementById('name').innerText=cooker[0].name
        document.getElementById('price').innerText=cooker[0].originalPrice
        document.getElementById('original').innerText=cooker[0].discountPrice
        calculatecost(cooker[0].discountPrice)
        break;
    case selectId===cooker[1].itemId:
        document.getElementById('image').src=cooker[1].image
        document.getElementById('name').innerText=cooker[1].name
        document.getElementById('original').innerText=cooker[1].originalPrice
        document.getElementById('price').innerText=cooker[1].discountPrice
        calculatecost(cooker[1].discountPrice)
        break;
    case selectId===cooker[2].itemId:
        document.getElementById('image').src=cooker[2].image
        document.getElementById('name').innerText=cooker[2].name
        document.getElementById('original').innerText=cooker[2].originalPrice
        document.getElementById('price').innerText=cooker[2].discountPrice
        calculatecost(cooker[2].discountPrice)
        break;
    case selectId===cooker[3].itemId:
        document.getElementById('image').src=cooker[3].image
        document.getElementById('name').innerText=cooker[3].name
        document.getElementById('original').innerText=cooker[3].originalPrice
        document.getElementById('price').innerText=cooker[3].discountPrice
        calculatecost(cooker[3].discountPrice)
        break;
    case selectId===cooker[4].itemId:
        document.getElementById('image').src=cooker[4].image
        document.getElementById('name').innerText=cooker[4].name
        document.getElementById('original').innerText=cooker[4].originalPrice
        document.getElementById('price').innerText=cooker[4].discountPrice
        calculatecost(cooker[4].discountPrice)
        break;
    case selectId===cooker[5].itemId:
        document.getElementById('image').src=cooker[5].image
        document.getElementById('name').innerText=cooker[5].name
        document.getElementById('original').innerText=cooker[5].originalPrice
        document.getElementById('price').innerText=cooker[5].discountPrice
        calculatecost(cooker[5].discountPrice)
        break;
    case selectId===cooker[6].itemId:
        document.getElementById('image').src=cooker[6].image
        document.getElementById('name').innerText=cooker[6].name
        document.getElementById('original').innerText=cooker[6].originalPrice
        document.getElementById('price').innerText=cooker[6].discountPrice
        calculatecost(cooker[6].discountPrice)
        break;
}
function calculatecost(cost){
    document.getElementById('quantity').onkeyup =()=>{
        let amount = parseInt(cost)
        let quantity = document.getElementById('quantity').value
        if(quantity>1){
            const cost = parseInt(quantity) * amount
            document.getElementById('cost').innerText = cost
            place(cost)
        }else{
            const cost = amount
            document.getElementById('cost').innerText = cost
            place(cost)
        }
    }
}
function place(cost){
    document.getElementById('place').onchange =()=>{
        let thika = 600
        let ngong = 1300
        let syokimau = 1900
        let place = document.getElementById('place').value
        switch (place){
            case 'thika':
                document.getElementById('cost').innerText = `cost: ${cost + thika}`
            break;
            case 'ngong':
                document.getElementById('cost').innerText = `cost: ${cost + ngong}`
            break;
            case 'syokimau':
                document.getElementById('cost').innerText = `cost: ${cost + syokimau}`
            break;
            default:
                document.getElementById('cost').innerText = `cost ${cost}`
        }
    }
}
