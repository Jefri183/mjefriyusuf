async function jepri() {
    const cars = await fetch("./data.json").then(i => i.json())
  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += `
     <a >
            <img src="${cars[i].fotoselfie}" alt="" />
  
            <p>
              <span>Nama :</span> ${cars[i].nama} <br />
              <span>NIM :</span> ${cars[i].nim } <br />
              <span>TTL :</span> ${cars[i].ttl} <br />
              <span>No. HP :</span> ${cars[i].no} <br />
              <span>Alamat :</span> ${cars[i].alamat} <br
              <span>Kelompok :</span> ${cars[i].kelompok}
            </p>
          </a>
          `
    // text += + "<br>";
    // text += cars[i].kelompok + "<br>";
    // text += cars[i].nim + "<br>";
    // text += cars[i].alamat + "<br>";
    // text += cars[i].no + "<br>";
    // text += cars[i].ttl + "<br>";
  }
  
  document.getElementById("card").innerHTML = text;
  }
  
  jepri()