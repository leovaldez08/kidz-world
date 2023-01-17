const totalItems = document.querySelector("#total-items");
const addButton = document.querySelectorAll(".addtocart");
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

function updateCart() {
    let cart = 0;
    for (const item of items) {
        cart += item.quantity;
    }
    totalItems.innerHTML = cart;
}

for (const button of addButton) {
    let i = 0
    button.addEventListener('click', (e) => {
        items[i].quantity++;
        updateCart();
    });
}

let totalDollars = 0;
let totalCents = 0;

function updateTotalCost() {
    let totalCentsPrice = 0;

    for (const item of items) {
        totalCentsPrice += item.quantity * (item.dollars * 100 + item.cents);
    }
    totalDollars = Math.floor(totalCentsPrice / 100);
    totalCents = totalCentsPrice % 100;
}

gotoCart.addEventListener('click', () => {
    updateTotalCost();

    for (const item of items) {
        if (item.quantity != 0) {
            console.log(`Item Name: ${item.name} - Quantity: ${item.quantity}`);
        }
    }
    console.log(`The total amount is ${totalDollars}$ and ${totalCents} cents.`);
});
