const Meats = [
    {name: "Ribeye", animal: "Cow", cost: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdMgkmT8X9r_E24IIOP_a4BBglJ5ol5ORXBbnpGXU2g&s=10"},
    {name: "New York Strip", animal: "Cow", cost: 16.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8SVcreuVPfoxouiHgudQ430IdeUn_QF8H915L__bXwA&s=10"},
    {name: "Filet", animal: "Cow", cost: 30, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Gn1_ONugnBByaz4sYWxhqIp7KQ3myO9nsK5xVaLeUw&s=10"},
    {name: "Sirloin", animal: "Cow", cost: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOepX1Dj0CMFFGCY9gUk9vn_XxTA7XEx_51iTAf4UHg&s=10"},
    {name: "T-Bone", animal: "Cow", cost: 14, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLF-x91vo2mjqiFakBMrHT2bvPG0H8O_v7upsjpydhg&s=10"},
    {name: "Skirt Steak", animal: "Cow", cost: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvSYwZ0eFJaKe5g4i-qfYk6G-xDkdNXOoBbq0o6M0Uw&s=10"},
    {name: "Flat Iron", animal: "Cow", cost: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzZVrdXsd35XvQFP2ACYvkT0wKK5DNcmf2tKqnH1mfw&s=10"},
    {name: "Hanger Steak", animal: "Cow", cost: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBa3qhDQ1DTUss0lGClGhRap85sOKYg0pjfc43tcSsw&s=10"},
    {name: "Chuck Eye Steak", animal: "Cow", cost: 9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW72OPBY9nxMGXTEGiB1lkB_wctl-NDe7cB1sbqfZklQ&s=10"},
    {name: "Chicken Breast", animal: "Chicken", cost: 4.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVPF1F3oSAdQrGVdRa-4OINbRvZ-MchC-6d22NtDxLg&s=10"},
    {name: "Chicken Thigh", animal: "Chicken", cost: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxsh6jWd05UttB4QMS0jcucSapYFNsxWZYROlu-eSRw&s=10"},
    {name: "Chicken Wing", animal: "Chicken", cost: 2.40, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr59FKmXFUHmVHf6kjwTP_keWGEqIq44s7Uir8mH3_KQ&s=10"},
    {name: "Chicken Drumstick", animal: "Chicken", cost: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZL98mtpiUi3rUjsAwoIJfWJgadUIgzDWI6bN4Hb1kQ&s=10"},
    {name: "Whole Chicken", animal: "Chicken", cost: 8.50, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHEPy1kNL8d0SK5eyRazeVQb3UdEo_ugBEtvROYsClw&s=10"},
    {name: "Rack of Lamb", animal: "Lamb", cost: 19, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVZyDJwKK8h6CGscho5ePALGqQpNp4TlXcbXrRl6q5A&s=10"},
    {name: "Lamb Leg", animal: "Lamb", cost: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WbNmN4NihiKsGSqZyacw1Xx1_AJz_uiz6VloUcveYA&s=10"},
    {name: "Lamb Chops", animal: "Lamb", cost: 15, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_KHgfTsM4ZTHPFY08-CHPREWKiBUWot2qO3yDoUhgw&s=10"},
    {name: "Pork Chops", animal: "Pig", cost: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg5jpZmpmCRyYA4qctdetPa0j_fsZD4u8d5W3Mv-hLQ&s=10"},
    {name: "Bacon", animal: "Pig", cost: 7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3HyQg_PgxQr2VJe87p80kkFV3DaDZYgObNwiZAKiRg&s=10"},
    {name: "Spare Ribs", animal: "Pig", cost: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCjj8NmZlEqOjZY7fI3DBTwAKUi41J8OCm2fjbjqvsg&s=10"},  
];

function inject(items){
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
            "beforeend",
    `<div class="card">
        <h2 class="card-header">${items.name}</h2>
        <img class ="img" src="${items.img}" alt="" />
        <p>${items.animal}</p>
        <p>${items.cost} per pound</p>
        <button class="btn"> add to cart</button>
      </div> `,
    );
};

Meats.forEach(inject);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", function(event){
    console.log(event.target.Meats(inject).getAttribute("items.name"));
}),
);