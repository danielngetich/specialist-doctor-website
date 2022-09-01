class FormData{
    constructor(fullname,appmtCost,registrationNo,phoneNO,location,categry,image){
        this.fullname=fullname;
        this.appmtCost=appmtCost;
        this.registrationNo=registrationNo;
        this.phoneNO=phoneNO;
        this.location=location;
        this.categry=categry;
        this.image=image;
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

    const collectedData=new FormData(fulname,appnt,regNo,phnNo,loction,category,image)

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
document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault();
dataCollection();
})