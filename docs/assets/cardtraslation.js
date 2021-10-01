
function rotate_card(id) {
    // console.log(id);
    // 
    // let element_back = selected_card.getElementsByClassName('back')[0];
    // let element_front = selected_card.getElementsByClassName('front')[0];
    
    // function transition(card) {
    //   if (card.classList.contains('active')) {
    //     card.classList.remove('active')
    //     element_back.style.opacity = 1;
    //     element_front.style.opacity = 0;
    //   } else {
    //     card.classList.add('active');
    //     element_back.style.opacity = 0;
    //     element_front.style.opacity = 1;
    //   }
    // }
    
    // transition(selected_card);
    console.log("Rotate card for" + id);
    let selected_card = document.getElementById(id)
    let back = selected_card.getElementsByClassName("card")[0];
    back.classList.toggle('is-flipped');
    // console.log(back);
}

 