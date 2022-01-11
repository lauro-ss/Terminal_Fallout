let total_words = document.getElementsByClassName('codigo');
let numb_words = 0;
let indice_words = [];
for(let i = 0; i < total_words.length; i++){
    if(total_words[i].textContent.length > 2){
        indice_words[numb_words] = i;
        numb_words++;
    }
}
let indice_random = Math.floor(Math.random() * numb_words);
total_words[indice_words[indice_random]].value = true;
let true_word = total_words[indice_words[indice_random]].textContent;
function getWord(){
    let mouse_word = document.getElementsByClassName('codigo');
    for(let i = 0; i < mouse_word.length; i++){
        mouse_word[i].addEventListener('mouseenter', function(){
            document.getElementById('test_word').innerHTML = '>'+ mouse_word[i].innerText;
        })
        mouse_word[i].addEventListener('mouseleave',function(){
            document.getElementById('test_word').innerHTML = '>';
        })
    }
}

let word_d = document.querySelector('#cod-direita');
let word_e = document.querySelector('#cod-esquerda');
word_d.addEventListener('click',processWord);
word_e.addEventListener('click',processWord);
function processWord(e){
    if(e.target !== e.currentTarget){
        if(e.target.value){
            /*palavra correta*/
            document.getElementById('Robco').style.display = 'none';
            let display_none = document.getElementsByClassName('display-chances');
            display_none[0].style.display = 'none'
            display_none = document.getElementsByClassName('options');
            display_none[0].style.display = 'none'
            display_none = document.getElementsByClassName('interacao');
            display_none[0].style.display = 'none'

            document.getElementById('menu-options').style.display = 'none';

            display_none = document.getElementById('mensagem');
            display_none.style.display = 'block';
        }else{
            if(e.target.textContent.length != true_word.length){
                document.getElementById('words').innerHTML += e.target.innerHTML+ '</br>'+ '>Erro' + '</br>';
            }else{
                let tag_words = document.getElementById('words');
                let tag_blocos = document.getElementsByClassName('blocos');
                tag_words.innerHTML += '>'+e.target.textContent + ' </br> '+'>Acesso</br>Negado.' + '</br>'+ 
                '>Aproximação=' + compWords(e.target.textContent) + '</br>';
                for(let i = tag_blocos.length-1; i >= 0; i--){
                    if(tag_blocos[i].textContent.length > 0){
                        tag_blocos[i].textContent = '';
                        i = -1;
                    }
                }
                if(tag_blocos[0].textContent.length == 0){
                    /*bloqueio de terminal*/
                    word_d.removeEventListener('click',processWord);
                    word_e.removeEventListener('click',processWord);
                }
            }
        }
        
    }
}
function compWords(palavra){
    let cont = 0;
    for(let i = 0; i < palavra.length; i++){
        if(palavra[i] == true_word[i]){
            cont++;
        }
    }
    return cont;
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
            mouse_word[i].style.color = "rgb"+'('+(17)+','+(17)+','+(17)+')';
        })
        mouse_word[i].addEventListener('mouseleave',function(){
        mouse_word[i].style.backgroundColor = '';
        mouse_word[i].style.color = '';
        })
    }
}
function changeColorPred(r,g,b){
    let RGBColor = document.getElementsByClassName('RGBColors');
    let mainColor = document.getElementsByTagName('main');
    let mouse_word = document.getElementsByClassName('codigo');

    mainColor[0].style.color = "rgb"+'('+r+','+g+','+b+')'
    for(let i = 0; i < mouse_word.length; i++){
        mouse_word[i].style.color = "rgb"+'('+r+','+g+','+b+')'
    }
    RGBColor[0].value = r;
    RGBColor[1].value = g;
    RGBColor[2].value = b;
    for(let i = 0; i < RGBColor.length; i++){
        RGBColor[i].style.color = "rgb"+'('+r+','+g+','+b+')'
    }
    for(let i = 0; i < mouse_word.length; i++){
        mouse_word[i].addEventListener('mouseover', function(){
            mouse_word[i].style.backgroundColor = "rgb"+'('+(r-10)+','+(parseInt(g,10)+2) +','+(b-6)+')';
            mouse_word[i].style.color = "rgb"+'('+(17)+','+(17)+','+(17)+')';
        })
        mouse_word[i].addEventListener('mouseleave',function(){
        mouse_word[i].style.backgroundColor = '';
        mouse_word[i].style.color = '';
        })
    }
}