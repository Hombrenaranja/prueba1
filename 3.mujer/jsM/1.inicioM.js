//aparecer el menu para telefono
addEventListener('DOMContentLoaded',() => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }

})
//funcion de busqueda
document.getElementById("inputSearch").addEventListener("keyup",buscador_filtrado)
//variables
cover_ctn_search= document.getElementById('cover-ctn-search');
inputSearch=      document.getElementById('inputSearch');
box_search=       document.getElementById('box-search');
//filtrado de busqueda
function buscador_filtrado(){

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //recorriendo elementos
    for(i=0; 1 < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
                box_search.style.display = "block";

                if(inputSearch.value === ""){
                    box_search.style.display  = "none";
                }
        }
        else{
            li[i].style.display = "none";
            }
    }
}
//----------CAROUSEL1---//
new Glide('.glide', {
    type: 'slider',
    perView: 4,
    autoplay: 2500,
    hoverpause: false,
    startAt: 5,
    gap: 20,
    focusAt: 'center',
    hoverpause: false,
    breakpoints: { 
            1200: {
                perView: 3
            },
            800: {
                perView: 2
            },
        }
    })
.mount()
//----------CAROUSEL2---//
new Glide('.glide1', {
    type: 'slider',
    perView: 4,
    autoplay: 2500,
    hoverpause: false,
    startAt: 5,
    gap: 20,
    focusAt: 'center',
    hoverpause: false,
    breakpoints: { 
            1200: {
                perView: 3
            },
            800: {
                perView: 2
            },
        }
    })
.mount()
//----------CAROUSEL3---//
new Glide('.glide2', {
    type: 'slider',
    perView: 4,
    autoplay: 2500,
    hoverpause: false,
    startAt: 5,
    gap: 20,
    focusAt: 'center',
    hoverpause: false,
    breakpoints: { 
            1200: {
                perView: 3
            },
            800: {
                perView: 2
            },
        }
    })
.mount()