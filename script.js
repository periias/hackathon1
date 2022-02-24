fetch("https://api.openbrewerydb.org/breweries")
.then((x)=>x.json())
.then((response)=>{
    let parentDiv=document.getElementById("brewer");
    response.map((x)=>{
        let ara=document.createElement("p");
        ara.innerText=x.name;
        parentDiv.appendChild(ara);

        let ara1=document.createElement("p");
        ara1.innerText=x.brewery_type;
        parentDiv.appendChild(ara1);

        let ara2=document.createElement("p");
        ara2.innerText=x.address_2;
        parentDiv.appendChild(ara2);

        let ara3=document.createElement("p");
        ara3.innerText=x.website_url;
        parentDiv.appendChild(ara3);

        let ara4=document.createElement("p");
        ara4.innerText=x.phone;
        parentDiv.appendChild(ara4);
    })
})
.catch((er)=>console.error(er));