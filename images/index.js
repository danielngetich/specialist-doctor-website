class FormData{
    constructor(fullname,appmtCost,registrationNo,phoneNO,location,categry,image,gent){
        this.fullname=fullname;
        this.appmtCost=appmtCost;
        this.registrationNo=registrationNo;
        this.phoneNO=phoneNO;
        this.location=location;
        this.categry=categry;
        this.image=image;
        this.gent=gent;
    }
}
 function dataCollection(){
    document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let fulname=document.getElementById("fulnm").value;
    let regNo=document.getElementById("regno").value
    let phnNo=document.getElementById("phno").value
    let appnt=document.getElementById("appnmt").value
    let loction=document.getElementById("loctn").value
    let category=document.getElementById("category").value
    let image=document.getElementById("file").value
    let gender=document.getElementsByName("input[name='gender']").value;

    const collectedData=new FormData(fulname,appnt,regNo,phnNo,loction,category,image,gender)

    fetch("http://localhost:3000/Doctors",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(collectedData)
    }).then(response=>{
        return response.json();
    }).then((data)=>{
        console.log(data)
    })
})}

function appendData(){
    fetch("http://localhost:3000/Doctors")
    .then(response=>response.json())
    .then((data)=>{
        data.map((dat)=>{
           let register= document.querySelector(".Docregister")
           let img=document.createElement("img")
           const reader=new FileReader();

           register.appendChild(img).innerHTML=img.setAttribute("src",dat.image)
           let h4=document.createElement("h4")
           register.appendChild(h4).innerHTML=dat.fullname
           let h5=document.createElement("h5")
           register.appendChild(h5).innerHTML=dat.categry
        })
    })
}
appendData()
function deleteServer(id){
    fetch(`http://localhost:3000/Doctors/${id}`,{
        method:"DELETE",
        headers:{
            "content-type":"application/json"
        },
    }).then(response=>response.json())
    .then((data)=>console.log(data))
}

document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
dataCollection();
// deleteServer();
})