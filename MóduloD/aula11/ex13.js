    /* Condição Simples */

    var vel = 59.3;
    
    console.log(`A velocidade do seu carro é ${vel.toFixed(2).replace('.', ',')} km/h.`);

    if(vel > 60){
        console.log('Você ultrapassou a velocidade permitida! MULTADO.');
    }