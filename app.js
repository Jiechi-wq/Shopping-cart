const Meats = [
    {name: "Ribeye", animal: "Cow", cost: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdMgkmT8X9r_E24IIOP_a4BBglJ5ol5ORXBbnpGXU2g&s=10"},
    {name: "New York Strip", animal: "Cow", cost: 16.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SVcreuVPfoxouiHgudQ430IdeUn_QF8H915L__bXwA&s=10"},
    {name: "Filet", animal: "Cow", cost: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Gn1_ONugnBByaz4sYWxhqIp7KQ3myO9nsK5xVaLeUw&s=10"},
    {name: "Sirloin", animal: "Cow", cost: 15, img: ""},
    {name: "T-Bone", animal: "Cow", cost: 14, img: ""},
    {name: "Skirt Steak", animal: "Cow", cost: 15, img: ""},
    {name: "Flat Iron", animal: "Cow", cost: 10, img: ""},
    {name: "Hanger Steak", animal: "Cow", cost: 20, img: ""},
    {name: "Chuck Eye Steak", animal: "Cow", cost: 9, img: ""},
    {name: "Chicken Breast", animal: "Chicken", cost: 4.50, img: ""},
    {name: "Chicken Thigh", animal: "Chicken", cost: 4, img: ""},
    {name: "Chicken Wing", animal: "Chicken", cost: 2.40, img: ""},
    {name: "Chicken Drumstick", animal: "Chicken", cost: 2, img: ""},
    {name: "Whole Chicken", animal: "Chicken", cost: 8.50, img: ""},
    {name: "Rack of Lamb", animal: "Lamb", cost: 19, img: ""},
    {name: "Lamb Thigh", animal: "Lamb", cost: 15, img: ""},
    {name: "Lamb Chops", animal: "Lamb", cost: 15, img: ""},
    {name: "Pork Chops", animal: "Pig", cost: 4, img: ""},
    {name: "Bacon", animal: "Pig", cost: 7, img: ""},
    {name: "Spare Ribs", animal: "Pig", cost: 3, img: ""},  
];

function inject(items){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
            "beforeend",
    `<div class="card">
        <h2 class="card-header">${items.name}</h2>
        <img src="${items.img}" alt="" />
        <p>${items.animal}</p>
        <p>${items.cost} per pound</p>
        <button class="btn"> add to cart</button>
      </div> `,
    );
};

Meats.forEach(inject);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", function(event){
    console.log(event.target.closest(".card").getAttribute("items.name", "items.cost"));
}),
);