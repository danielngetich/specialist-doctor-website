class formData{
    constructor(fullname,appmtCost,registrationNo,phoneNO,location){
        this.fullname=fullname;
        this.appmtCost=appmtCost;
        this.registrationNo=registrationNo;
        this.phoneNO=phoneNO;
        this.location=location;
    }
}

const fulname=document.getElementById("fulnm").value
const regNo=document.getElementById("regno").value
const phnNo=document.getElementById("phno").value
const appnt=document.getElementById("appnmt").value
const loction=document.getElementById("loctn").value


const collectedData=new formData(fulname,appnt,regNo,phnNo,loction)
 function dataCollection(){
    document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
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
document.addEventListener("DOMContentLoaded",()=>{
dataCollection();
})