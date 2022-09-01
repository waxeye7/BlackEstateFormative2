let to_click_div = document.getElementById("click-me");
let to_reveal_div = document.getElementById('reveal-me');
let to_grow_div = document.getElementById('to-grow');

to_click_div.onclick = my_func;



function my_func(){
    to_reveal_div.classList.toggle('hidden');
    if(to_grow_div) {
        to_grow_div.classList.toggle('grow');
    }
}