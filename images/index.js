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
    var uploadedImage= document.getElementById("inputFile").addEventListener("change",function(){
        const reader=new FileReader();
        reader.addEventListener("load",()=>{
            return reader.result;
        })
        reader.readAsDataURL(this.files[0])
    })
    const collectedData=new FormData(fulname,appnt,regNo,phnNo,loction,category,uploadedImage,gender)

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
}
)};
function appendData(){
    fetch("http://localhost:3000/Doctors")
    .then(response=>response.json())
    .then((data)=>{
        data.map((dat)=>{
           let register= document.querySelector(".Docregister")
           let h3=document.createElement("h4")
           register.appendChild(h3).innerHTML=dat.fullname
           let p=document.createElement("p")
           register.appendChild(p).innerHTML=dat.categry
           let li=document.createElement("li")
           register.appendChild(li).innerHTML=`Appointment cost ${dat.appmtCost}`
           let l=document.createElement("li")
           register.appendChild(l).innerHTML=`Board Certification no ${dat.registrationNo}`
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