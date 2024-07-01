 const carregarTexto = document.querySelector(".texto-carregamento");
 const fundo = document.querySelector(".fundo");

 let carregamento = 0;
 const blurring = () => {
    carregamento++;
    if (carregamento > 99) clearInterval(int);
    carregarTexto.innerText = `${carregamento}%`;
    carregarTexto.style.opacity = scale(carregamento, 0, 100, 1, 0);
    fundo.style.filter = `blur(${scale(carregamento, 0, 100, 30, 0)}px)
    `;
 };

 const scale = (num, in_min, in_max, out_min, out_max) => {
    return (( num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
 };

 let int = setInterval(blurring, 30);