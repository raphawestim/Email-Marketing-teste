//verificar se o usuario esta visualizando a pagina
const verificar = () => {
  if(document.visibilityState === 'visible'){
    console.log('O usuario esta visualizando a pagina')
  } else {
    console.log('O usuario nao esta visualizando a pagina')
  }
}

document.addEventListener('visibilitychange', verificar)