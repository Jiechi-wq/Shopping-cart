const items = [
    {name: "Ribeye", animal: "Cow", cost: 20},
    {name: "New York Strip", animal: "Cow", cost: 16.50},
    {name: "Filet", animal: "Cow", cost: 30},
    {name: "Sirloin", animal: "Cow", cost: 15},
    {name: "T-Bone", animal: "Cow", cost: 14},
    {name: "Skirt Steak", animal: "Cow", cost: 15},
    {name: "Flat Iron", animal: "Cow", cost: 10},
    {name: "Hanger Steak", animal: "Cow", cost: 20},
    {name: "Chuck Eye Steak", animal: "Cow", cost: 9},
    {name: "Chicken Breast", animal: "Chicken", cost: 4.50},
    {name: "Chicken Thigh", animal: "Chicken", cost: 4},
    {name: "Chicken Wing", animal: "Chicken", cost: 2.40},
    {name: "Chicken Drumstick", animal: "Chicken", cost: 2},
    {name: "Whole Chicken", animal: "Chicken", cost: 8.50},
    {name: "Rack of Lamb", animal: "Lamb", cost: 19},
    {name: "Lamb Thigh", animal: "Lamb", cost: 15},
    {name: "Lamb Chops", animal: "Lamb", cost: 15},
    {name: "Pork Chops", animal: "Pig", cost: 4},
    {name: "Bacon", animal: "Pig", cost: 7},
    {name: "Spare Ribs", animal: "Pig", cost: 3},  
];

function inject(items){
    const container = document.querySelector(".container");
    container.insertAdjacentElement(
            "beforeend",
    `<div class="card">
        <h2 class="card-header">${items.name}</h2>
        <img src="${items.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
    );
}