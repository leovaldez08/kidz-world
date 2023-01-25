const totalItems = document.querySelector("#total-items");
const addButtons = document.querySelectorAll(".addtocart");
const gotoCart = document.querySelector("#cartsection");
const items = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49
    },

    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59
    },

    {
        name: "Matilda",
        quantity: 0,
        dollars: 4,
        cents: 59
    },
  
    {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0
    },
  
    {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29
    },

    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99
    },

    {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49
    },

    {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99
    },

    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99
    },

    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49
    },

    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49
    },

    {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49
    },
  
    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99
    },
  
    {
        name: "Dream Catcher drawing",
        quantity: 0,
        dollars: 4,
        cents: 59
    },
];

let totalDollars = 0;
let totalCents = 0;

function updateCart() {
    let cart = 0;
    for (const item of items) {
        cart += item.quantity;
    }
    totalItems.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', () => {
        items[i].quantity++;
        updateCart();
    });
}

function updateTotalCost() {
    let totalCentsPrice = 0;

    for (const item of items) {
        totalCentsPrice += item.quantity * (item.dollars * 100 + item.cents);
    }
    totalDollars = Math.floor(totalCentsPrice / 100);
    totalCents = totalCents % 100;
}

let whatsappLink = "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink() {
for (let i = 0; i < items.length; i++) {
if (items[i].quantity != 0) {
whatsappLink += "%0A" + items[i].name + "%20" + items[i].quantity;
}
}
whatsappLink +=
"%0A" + "Total%20Price:%20$" + totalDollars + "%20" + totalCents + "c";
}

gotoCart.addEventListener('click', () => {
updateTotalCost();
updateWhatsappLink();
window.open(whatsappLink, "_blank");

for (const item of items) {
    if (item.quantity != 0) {
        console.log(`Item Name: ${item.name} - Quantity: ${item.quantity}`);
    }
}
console.log(`The total amount is ${totalDollars}$ and ${totalCents} cents.`);
});
