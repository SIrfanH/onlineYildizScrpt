
// Execute this code Developer Console in Online Yildiz Canli Ders Page
let elements = document.getElementsByClassName("btn btn-xs btn-info");
let array = [];

for(let i=0; i<elements.length; i++){
    $(elements[i]).trigger("click");
    $(window).on("shown.bs.modal", function(){
        let links = document.querySelectorAll("a");
        for (let j = 0; j < links.length; j++) {
            if (links[j].textContent == "İzle") {
                console.log(links[j].href);
                if(!array.includes(links[j].href)){
                    array.push(links[j].href);
                }
            }
        }
        $("#close-popup").trigger("click");
    })
}

// Then Execute this to get all the links on the right click and select copy object
console.log(array);

