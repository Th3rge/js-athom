/* 
Resolução do diagrama:

https://atmos-entrevista-tecnica-arquivos.s3.sa-east-1.amazonaws.com/Entrevista+t%C3%A9cnica+-+arquitetura+de+software.pdf
*/

//Cabeçalho da mensagem
const msg = {
  value: getRandomBoolean(),
  id: 2,
};

//função de gerar valor booleano randômico
function getRandomBoolean() {
  return Math.random() < 0.5; // Define o limite em 0.5 para ter uma chance de 50% de retornar true ou false
}

//Função para calcular a data do último login
const subDate = () => {
  const currentDate = new Date();
  const oldDate = new Date('2023-04-14'); // Data último login

  //pegando o tempo em milisegundos
  MilisecondsDifference = currentDate - oldDate;

  //transformando milisegundos em horas
  const hourDifference = Math.floor(MilisecondsDifference / (1000 * 60 * 60));

  //verifica se as horas desconectado é maior que 1 hora
  hourDifference > 1
    ? alert(`Você se manteve ${hourDifference} horas desconectado`)
    : 'Desconectado há menos de 1 hora';
  
    return hourDifference
};

//Verifica se o valor da mensagem é true ou false
if (msg.value === true) {
  alert(`O value da mensagem é ${msg.value}`);

  //Verifica valor do registro
  if (msg.id) {
    alert('Existe nos registros');

    //cria um novo objeto com o valor de registro
    const newObj = { ...msg, register: getRandomBoolean() };

    alert(`O registro é: ${newObj.register}`);

    if (newObj.register === false) {
      //remover registros
      alert('removido dos registro');

      /*função tempo de registro
      gerar alerta*/
      subDate();
    }
  }
  //logar informação
  alert('Logar Informação');
} else {
  alert(`O value da mensagem é ${msg.value}`);

  //cria um novo objeto com o valor de registro
  const newObj = {
    ...msg,
    register: getRandomBoolean(),
  };

  //adiciona o timestamp se register for FALSE
  if (newObj.register === false) {
    newMsg = {
      ...newObj,
      mac: Date(),
    };

    alert('Timestamp adicionado');
  }

  //logar informação
  alert('logar informação');
}
