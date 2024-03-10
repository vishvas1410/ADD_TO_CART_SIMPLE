let checkoutlist = [];
let ArrProducts = [
    {
        id:1,
        name:"HTML",
        image:"html-icon.png",
        price:1000,
        rating:5
    },
    {
        id:2,
        name:"CSS",
        image:"css-icon.png",
        price:1000,
        rating:4
    },
    {
        id:3,
        name:"JavaScript",
        image:"js-icon.png",
        price:5000,
        rating:5
    },
    {
        id:4,
        name:"JQuery",
        image:"jquery-icon.png",
        price:2000,
        rating:3
    },
    {
        id:5,
        name:"React",
        image:"react-icon.png",
        price:5000,
        rating:5
    },
    {
        id:6,
        name:"Angular",
        image:"Angular-icon.png",
        price:5500,
        rating:5
    }
];

const body = document.querySelector("body");
const products = document.querySelector(".products");
const shoppingBasket = document.querySelector(".shoppingBasket");
const productList = document.querySelector(".productList");
const qty = document.querySelector(".quantity");
const tot = document.querySelector(".total");
shoppingBasket.onclick = () =>{
    // alert("");
    body.classList.add("active");
};
const close = document.querySelector(".close");
close.onclick =()=>{
    
    body.classList.remove("active");
};
function onInIt()
{
    ArrProducts.forEach((item,key)=>{
       let div = document.createElement("div");
       div.classList.add("item");
        
       let star = "";
       for(i=0;i<item.rating;i++)
       {
            star += `<i class="fa fa-star"></i>`;
       }

       div.innerHTML = `
            <img src="Images/${item.image}" />
            <div class="name">${item.name}</div>
            <div>${star}</div>
            <div class="price"><small>₹<small>${item.price}</div>
            <button onclick="addToCart(${key})"><i class="fa fa-cart-plus"></i>Add to Cart</button>
       `;
       products.appendChild(div);
    });
}
onInIt();
function addToCart(Id)
{   
    // console.log(ArrProducts[Id]);
    if(checkoutlist[Id] == null)
    {
        checkoutlist[Id] = ArrProducts[Id];
        checkoutlist[Id].qty = 1;
    }
    else{
        checkoutlist[Id].qty+= 1;
    }
    reloadCart();
}

function reloadCart()
{
    
    productList.innerHTML = "";
    let count = 0;
    let totPrice = 0;
    checkoutlist.forEach((item,key)=>{
        count+=item.qty;
        totPrice+=parseInt(item.qty*item.price);
        let li = document.createElement("li");
        li.innerHTML = `
            <img src="Images/${item.image}">
            <div>${item.name}</div>
            <div>${item.price}</div>
            <div>
            <button onclick="chQuantity(${key},${item.qty-1});">-</button>
            <div class="count">${item.qty}</div>
            <button onclick="chQuantity(${key},${item.qty+1});">+</button>
            </div>
        `;
        productList.appendChild(li);

    }); 
    tot.innerHTML = `<small>Subtotal (${count} Items) ₹</small>`+totPrice;
    qty.innerHTML = count;

}

function chQuantity(key,quantity)
{
    if(quantity==0)
    {
        delete checkoutlist[key];
    }
    else{
        checkoutlist[key].qty = quantity;       
    }
    reloadCart();
}