var carta1 = {
  nome: 'Messi',
  geral: 93,
  atributos: {
    Pace: 85,
    Shooting: 92,
    Passing: 91,
    Dribbling: 95,
    Defense: 38,
    Physical: 65
  }
}

var carta2 = {
  nome: 'Cristiano Ronaldo',
  geral: 92,
  atributos: {
    Pace: 89,
    Shooting: 93,
    Passing: 81,
    Dribbling: 89,
    Defense: 35,
    Physical: 77
  }
}

var carta3 = {
  nome: 'Neymar Jr',
  geral: 91,
  atributos: {
    Pace: 91,
    Shooting: 85,
    Passing: 86,
    Dribbling: 94,
    Defense: 36,
    Physical: 59
  }
}

var carta4 = {
  nome: 'Mbappé',
  geral: 90,
  atributos: {
    Pace: 96,
    Shooting: 86,
    Passing: 78,
    Dribbling: 91,
    Defense: 39,
    Physical: 76
  }
}

var carta5 = {
  nome: 'Lewandowski',
  geral: 91,
  atributos: {
    Pace: 78,
    Shooting: 91,
    Passing: 78,
    Dribbling: 86,
    Defense: 43,
    Physical: 82
  }
}

var carta6 = {
  nome: 'De Bruyne',
  geral: 91,
  atributos: {
    Pace: 76,
    Shooting: 86,
    Passing: 93,
    Dribbling: 88,
    Defense: 64,
    Physical: 78
  }
}

var carta7 = {
  nome: 'Salah',
  geral: 90,
  atributos: {
    Pace: 93,
    Shooting: 86,
    Passing: 81,
    Dribbling: 90,
    Defense: 45,
    Physical: 75
  }
}

var carta8 = {
  nome: 'Mané',
  geral: 90,
  atributos: {
    Pace: 94,
    Shooting: 85,
    Passing: 80,
    Dribbling: 90,
    Defense: 44,
    Physical: 76
  }
}

var carta9 = {
  nome: 'Kane',
  geral: 88,
  atributos: {
    Pace: 68,
    Shooting: 91,
    Passing: 80,
    Dribbling: 81,
    Defense: 47,
    Physical: 83
  }
}

var carta10 = {
  nome: 'Kroos',
  geral: 88,
  atributos: {
    Pace: 54,
    Shooting: 81,
    Passing: 91,
    Dribbling: 81,
    Defense: 71,
    Physical: 69
  }
}

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaJogador = parseInt(Math.random() * cartas.length)

  // o parseInt é para deixar o número inteiro, já que Math.random() sorteia números decimais

  // por que "Math.random() * cartas.length"?
  // porque o Math.random() sorteia apenas números entre 0 e 1
  // ao multiplicar pelo tamanho do array, possibilita sortear todos as posições do array, não apenas 0 e 1

  cartaJogador = cartas[numeroCartaJogador]

  // com o comando abaixo, remove-se a carta sorteada para o Jogador
  cartas.splice(numeroCartaJogador, 1)
  // dessa forma, ao sortear a carta da Máquina, não terá a carta do Jogador como opção

  var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibirOpcoes()
  exibirCartaJogador()
}

function exibirOpcoes() {
  var exibirH2 = document.querySelector('h2')
  exibirH2.style.opacity = '1'

  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ' '

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
  opcoes.style.opacity = '1'
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()

  var divPontosJogador = document.getElementById('pJogador')
  var divPontosMaquina = document.getElementById('pMaquina')
  var mensagemResultado = document.getElementById('mensagemResultado')

  if (atributoSelecionado == undefined) {
    document.getElementById('nadaSelecionado')
    nadaSelecionado.style.opacity = '1'
  } else {
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    exibirCartaMaquina()
    document.getElementById('btnJogar').disabled = 'true'

    var pontosJogador = 0
    var pontosMaquina = 0

    if (valorCartaJogador > valorCartaMaquina) {
      pontosJogador++
      divPontosJogador.innerHTML = pontosJogador
      mensagemResultado.innerHTML = 'CONGRATULATIONS! YOU WON'
    } else if (valorCartaMaquina > valorCartaJogador) {
      pontosMaquina++
      divPontosMaquina.innerHTML = pontosMaquina
      mensagemResultado.innerHTML = 'WHAT A PITY! YOU LOST'
    } else {
      pontosJogador++
      pontosMaquina++
      divPontosJogador.innerHTML = pontosJogador
      divPontosMaquina.innerHTML = pontosMaquina
      mensagemResultado.innerHTML = 'DRAW!'
    }
    mensagemResultado.style.opacity = '1'
  }
}

function exibirCartaJogador() {
  var imagemCartaJogador = document.getElementById('imagem-carta-jogador')
  imagemCartaJogador.innerHTML =
    "<img src='/media/players-image/" + cartaJogador.nome + ".png' alt='' />"
}

function exibirCartaMaquina() {
  var imagemCartaMaquina = document.getElementById('imagem-carta-maquina')
  imagemCartaMaquina.innerHTML =
    "<img src='/media/players-image/" + cartaMaquina.nome + ".png' alt='' />"
}
