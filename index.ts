import puppeterr from 'puppeteer'


async function buscaComentarios() {
  const browser = await puppeterr.launch( { headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/p/CJguCrMpSyo/');

  const comentarios = await page.evaluate( ()=>{
    const listaDeComentarios = document.querySelectorAll('.C4VMK > span');
    function busca(){
        for (let index = 0; index <= listaDeComentarios.length; index++) {
          const comentario = document.querySelectorAll('.C4VMK > span')[index].textContent
          return comentario;
        }
    }
    return{
      comentario: [
       busca()
      ]
      
    }
  })
  console.log(comentarios);

  await browser.close();
}

buscaComentarios();