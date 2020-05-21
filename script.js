var controll = true;
var pointsX = 0;
var pointsO = 0
var winner = false;
var marked = [];
var xMarked = [];
var oMarked = [];
var controllTwo = 0;
var reiniciar = document.querySelector('button');
var news = document.querySelector('h1');
var infoX = document.getElementById('x');
var infoO = document.getElementById('o');
var localPointX = document.getElementById('pointX');
var localPointO = document.getElementById('pointO')
var controller = 0;
var reiniciar = document.querySelector('.reiniciar');

reiniciar.addEventListener('click', () => {
    var inputs = [];
    inputs.push(
        document.querySelector('.one'),
        document.querySelector('.two'),
        document.querySelector('.three'),
        document.querySelector('.three'),
        document.querySelector('.four'),
        document.querySelector('.four'),
        document.querySelector('.five'),
        document.querySelector('.six'),
        document.querySelector('.seven'),
        document.querySelector('.eight'),
        document.querySelector('.nine'),
    )
    inputs.map((e) => {
        e.style.color = 'white';
    })
    inputs.map((e) => {
        e.value = '.';
    })
    xMarked.length = 0;
    oMarked.length = 0;
    controll = true;
    winner = false;
    marked.length = 0;
    controllTwo = 0;
    controller = 0;
    news.innerText = ''
})

function input(position) {
    var local = document.querySelector(position);
    var player = null;
    var info = infoO;
    var search = marked.indexOf(position);
    
    if(winner == true){

    }else{
        if(search >= 0 && marked.length >= 1) {
            news.style.color = 'red'
            news.innerHTML = 'Já marcado';
        }else{
            marked.push(position)
        
            local.style.color = 'black';
        
            if(controll == true){
                player = 'O';
                info = infoX;
                infoO.style.borderBottom = 'none'
                controll = false;
                oMarked.push(position);
                infoO.style.borderBotton = '2px solid green';
                
            }else if(controll == false) {
                player = 'X';
                info = infoO
                infoX.style.borderBottom = 'none'
                controll = true;
                xMarked.push(position);
            }
            
        controllTwo++
        local.value = player;

        function win(win){
            if(win == 'X') {
                info = infoX;
                pointsX += 1
            }else {
                info = infoO;
                pointsO += 1;
            }
            news.style.color = 'red';
            news.innerHTML =`Jogador "${win}" venceu`;
            winner = true;
            controller = 1;
            info.style.borderBottom = '3px solid red';
        }
        
        if(xMarked.indexOf('.one') > -1 && xMarked.indexOf('.two') > -1 && xMarked.indexOf('.three') > -1 ){  
            win('X');

        }else if(xMarked.indexOf('.four') > -1 && xMarked.indexOf('.five') > -1 && xMarked.indexOf('.six') > -1 ){
            win('X');
    
        }else if(xMarked.indexOf('.seven') > -1 && xMarked.indexOf('.eight') > -1 && xMarked.indexOf('.nine') > -1 ){
            win('X');
        }else if(xMarked.indexOf('.one') > -1 && xMarked.indexOf('.four') > -1 && xMarked.indexOf('.seven') > -1 ){
            win('X');
        }else if(xMarked.indexOf('.two') > -1 && xMarked.indexOf('.five') > -1 && xMarked.indexOf('.eight') > -1 ){
            win('X');
        }else if(xMarked.indexOf('.three') > -1 && xMarked.indexOf('.six') > -1 && xMarked.indexOf('.nine') > -1 ){
            win('X');
        }else if(xMarked.indexOf('.three') > -1 && xMarked.indexOf('.five') > -1 && xMarked.indexOf('.seven') > -1 ){
            win('X');
        }else if(xMarked.indexOf('one') > -1 && xMarked.indexOf('five') > -1 && xMarked.indexOf('.nine') > -1 ){
            win('X');

        }else if(oMarked.indexOf('.one') > -1 && oMarked.indexOf('.two') > -1 && oMarked.indexOf('.three') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.four') > -1 && oMarked.indexOf('.five') > -1 && oMarked.indexOf('.six') > -1 ){
            win('O');
    
        }else if(oMarked.indexOf('.seven') > -1 && oMarked.indexOf('.eight') > -1 && oMarked.indexOf('.nine') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.one') > -1 && oMarked.indexOf('.four') > -1 && oMarked.indexOf('.seven') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.two') > -1 && oMarked.indexOf('.five') > -1 && oMarked.indexOf('.eight') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.three') > -1 && oMarked.indexOf('.six') > -1 && oMarked.indexOf('.nine') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.three') > -1 && oMarked.indexOf('.five') > -1 && oMarked.indexOf('.seven') > -1 ){
            win('O');
        }else if(oMarked.indexOf('.one') > -1 && oMarked.indexOf('.five') > -1 && oMarked.indexOf('.nine') > -1 ){
            win('O');
        }else if(controllTwo == 9) {
            news.style.color = 'red';
            news.innerHTML = 'O jogo empatou!';
            winner = true;
            controller = 1
        }
        
        if(controller == 0){
            info.style.borderBottom = '3px solid red';
        }
        
        localPointO.innerText = pointsO;
        localPointX.innerText = pointsX;
            
        }

        
    } 
}   

