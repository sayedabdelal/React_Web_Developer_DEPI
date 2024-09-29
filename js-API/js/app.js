let data;
var cardContainer = document.querySelector(".hereToAdd");

async function getData(Fruit) {
    try {
        data = await fetch(
            `https://forkify-api.herokuapp.com/api/search?q=${Fruit}`
        )
            .then((res) => res.json())
            .then(({ recipes }) => recipes);
    } catch (err) {
        console.log(err);
    }
}

async function updateData(desiredFruit) {
    await getData(desiredFruit);
    var cartoona = "";
    for (let i = 0; i < data.length; i++) {
        cartoona += `
         <div class="card" style="width: 22%; padding: 0;">
            <img src=${data[i].image_url} width="100%" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text">${data[i].title}</p>
            </div>
          </div>
        `;
    }
    cardContainer.innerHTML = cartoona;
}

function myToggle() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        document.querySelector(".mainContent").style.marginLeft = "0";
    } else {
        sidebar.style.width = "250px";
        document.querySelector(".mainContent").style.marginLeft = "250px";
    }
}
