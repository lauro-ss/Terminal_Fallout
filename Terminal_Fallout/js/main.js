function teste(indice){
    let teste = document.getElementsByTagName('p');
}
function getWord(indice){
    if(indice != -1){
        let mouse_word = document.getElementsByClassName('codigo');
        console.log(mouse_word[indice].innerHTML);
        document.getElementById('test_word').innerHTML = '>'+ mouse_word[indice].innerText;
    }else{
        document.getElementById('test_word').innerHTML = '>';
    }
}
function showOptions(){
    let checkBox = document.getElementById('check');
    let menu = document.getElementById('menu-options');
    if(checkBox.checked == true){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}
function changeColor(){
    let RGBColor = document.getElementsByClassName('RGBColors');
    let mainColor = document.getElementsByTagName('main');
    let mouse_word = document.getElementsByClassName('codigo');
    for(let i = 0; i < 3; i++){
        if(RGBColor[i].value > 255){
            RGBColor[i].value = 255;
        }
        else if(RGBColor[i].value < 0){
            RGBColor[i].value = 0;
        }
    }
    
    mainColor[0].style.color = "rgb"+'('+RGBColor[0].value+','+RGBColor[1].value+','+RGBColor[2].value+')'
    for(let i = 0; i < mouse_word.length; i++){
        mouse_word[i].style.color = "rgb"+'('+RGBColor[0].value+','+RGBColor[1].value+','+RGBColor[2].value+')';
    }
 
    for(let i = 0; i < RGBColor.length; i++){
        RGBColor[i].style.color = "rgb"+'('+RGBColor[0].value+','+RGBColor[1].value+','+RGBColor[2].value+')'
    }
    
    for(let i = 0; i < mouse_word.length; i++){
        mouse_word[i].addEventListener('mouseover', function(){
            mouse_word[i].style.backgroundColor = "rgb"+'('+(RGBColor[0].value-10)+','+(parseInt(RGBColor[1].value,10)+2) +','+(RGBColor[2].value-6)+')';
            mouse_word[i].style.color = "rgb"+'('+(parseInt(RGBColor[0].value,10)+1)+','+(RGBColor[1].value-60)+','+(parseInt(RGBColor[2].value,10)+2)+')';
        })
        mouse_word[i].addEventListener('mouseleave',function(){
        mouse_word[i].style.backgroundColor = '';
        mouse_word[i].style.color = '';
        })
    }
}