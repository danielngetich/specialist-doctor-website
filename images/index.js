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
    let gender=document.getElementsByName("input[name='gender']").value;
    let image=document.getElementById("inputFile").value
    const collectedData=new FormData(fulname,appnt,regNo,phnNo,loction,category,image,gender)

    fetch("https://doctors-serverapi.herokuapp.com/doctors",{
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
}
)};
function appendData(){
    fetch("https://doctors-serverapi.herokuapp.com/doctors")
    .then(response=>response.json())
    .then((data)=>{
        data.map((dat)=>{
           let register= document.querySelector(".Docregister")
           let h2=document.createElement("h2")
           register.appendChild(h2).innerHTML=dat.fullname
           let h3=document.createElement("h3")
           register.appendChild(h3).innerHTML=`Specialised in : ${dat.categry}`
           let li=document.createElement("li")
           register.appendChild(li).innerHTML=`Appointment cost : ${dat.appmtCost}`
           let l=document.createElement("li")
           register.appendChild(l).innerHTML=`Board Certification no : ${dat.registrationNo}`
           let m=document.createElement("li")
           register.appendChild(m).innerHTML=`Location : ${dat.location}`
           let n=document.createElement("li")
           register.appendChild(n).innerHTML=`Telephone no : ${dat.phoneNO}`
        })
    })
}

document.getElementById("display").addEventListener("click",()=>{
    appendData()
})

function deleteServer(id){
    fetch(`https://doctors-serverapi.herokuapp.com/doctors/${id}`,{
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
// var uploadedImage= document.getElementById("inputFile").addEventListener("change",function(){
//     const reader=new FileReader();
//     reader.addEventListener("load",()=>{
//         uploadedImage= reader.result;
//     })
//     reader.readAsDataURL(this.files[0])
// })