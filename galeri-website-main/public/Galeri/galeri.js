$(document).ready(function (){


    async function getGaleri(file) {
      const get = await fetch(file)
      const data = await get.json()
      let txt = ''
  
      for (let i = 0;i < data.length;i++ ) {
        const obj = data[i];
        
        txt += `
        <div class="box">
          <img src="${obj.img}">
          <div class="desc">
            <p>${obj.desc}</p>
          </div>
        </div>
        `
      }
  
      $('.container').html(txt)    
    }
  
    getGaleri("./galeri.json")
  
  })