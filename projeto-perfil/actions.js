function mudarImagem() {
    const invisivel = document.querySelector('#invisivel');
    const dados = document.querySelector('#dados')
    const circulo = document.querySelector('#circle')
    const footer = document.querySelector('#cabecalho')
    const botaoVoltar = document.querySelector('#botao-voltar')
    if(invisivel.style.display === 'none') {
        invisivel.style.display = 'inline-block'
        dados.style.display = 'none';
        botaoVoltar.style.display = 'block'
        footer.style.display = 'none'      
    } else {
     invisivel.style.display = 'none';  
    }
}


function getBack() {
    const footer = document.querySelector('#cabecalho')
    const botaoVoltar = document.querySelector('#botao-voltar');
        invisivel.style.display = 'none'
        dados.style.display = 'inline-block';
        botaoVoltar.style.display = 'none';
        footer.style.display = 'block';
}

let i = 0;
function mudarFundo() {
    /*const imgSummer = "url('imgs/summer-new.jpg')";   
    document.body.style.backgroundImage = imgSummer;


    const tela = document.getElementById('iframeTela')
    tela.src = 'imgs/flor-5.jpg'


    let cor1 = getComputedStyle(document.documentElement).getPropertyValue('--corSection'); 
    let cor2 = getComputedStyle(document.documentElement).getPropertyValue('--corh1');
    let cor3 = getComputedStyle(document.documentElement).getPropertyValue('--corFooterP');

    document.body.style.setProperty('--corSection', '#358118');
    document.body.style.setProperty('--corh1', 'white');
    document.body.style.setProperty('--corFooterP', 'white');
    document.body.style.setProperty('--corDados', 'white');*/
    

if(i % 2 === 0) {
    const imgSummer = "url('imgs/summer-new.jpg')";   
    document.body.style.backgroundImage = imgSummer;


    const tela = document.getElementById('iframeTela')
    tela.src = 'imgs/flor-5.jpg'


    let cor1 = getComputedStyle(document.documentElement).getPropertyValue('--corSection'); 
    let cor2 = getComputedStyle(document.documentElement).getPropertyValue('--corh1');
    let cor3 = getComputedStyle(document.documentElement).getPropertyValue('--corFooterP');

    document.body.style.setProperty('--corSection', '#358118');
    document.body.style.setProperty('--corh1', 'white');
    document.body.style.setProperty('--corFooterP', 'white');
    document.body.style.setProperty('--corDados', 'white');
    
}
else {
    const fall = "url('imgs/pexels-pixabay-235767.jpg')";   
    document.body.style.backgroundImage = fall;
    

    const tela = document.getElementById('iframeTela')
    tela.src = 'imgs/pexels-jaime-reimer-14380382.jpg'


    let cor1 = getComputedStyle(document.documentElement).getPropertyValue('--corSection'); 
    let cor2 = getComputedStyle(document.documentElement).getPropertyValue('--corh1');
    let cor3 = getComputedStyle(document.documentElement).getPropertyValue('--corFooterP');

    document.body.style.setProperty('--corSection', '#7D2922');            
    document.body.style.setProperty('--corh1', '#b13a30');                 
    document.body.style.setProperty('--corFooterP', '#d64639');             
    document.body.style.setProperty('--corDados', '#d64639'); 
                
}
i++;
}



