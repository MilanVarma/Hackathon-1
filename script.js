let div1 = document.createElement("div")

async function a(){
    let res = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    let data = await res.json();
    console.log(data)
    data.forEach((d)=> {
        
        let div = document.createElement("div");
        div.innerHTML = `<img src="${d.api_featured_image}" width="100%" height="300px">
        <p>${d.brand}</p>
        <h3>${d.name}</h3>
        <p>${d.price_sign} ${d.price}</p>
        
        <p style="border-top:1px solid black;padding-top:10px" class="scroll">${d.description}</p>`;
        div.style.height= "600px";
        div.style.width = "300px";
        div.style.backgroundColor = "white";
        div.style.padding = "10px";
    
        div.style.textAlign = "center";
        div.style.borderRadius = "10px";
        div1.appendChild(div)
        document.body.append(div1)
    });
    div1.style.display = "flex";
    div1.style.flexWrap = "wrap";
    div1.style.gap = "10px";
    div1.style.justifyContent = "center";
    
}
a()