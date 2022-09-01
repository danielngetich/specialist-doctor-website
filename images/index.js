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
        data.map(()=>{
            document.getElementById("imgn").src=data.image
            document.getElementById("docName").innerHTML=data.fullname
            document.getElementById("categr").innerHTML=data.categry
        })
    })
}

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
appendData();
// deleteServer(id);
})