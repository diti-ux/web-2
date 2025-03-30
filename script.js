function shfaqLinke(id) {
    let links = document.querySelectorAll(".links");
    links.forEach(div => div.style.display = "none"); // Fshi të gjitha kategoritë
    document.getElementById(id).style.display = "block"; // Shfaq vetëm kategorinë e zgjedhur
}

function kopjoLink(link) {
    let tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = link;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Linku u kopjua: " + link);
}

function kerkoKategori() {
    let input = document.getElementById("search").value.toLowerCase();
    let categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        if (category.innerText.toLowerCase().includes(input)) {
            category.style.display = "inline-block";
        } else {
            category.style.display = "none";
        }
    });
}
