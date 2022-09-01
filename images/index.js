class formData{
    constructor(fullname,category,registrationNo,phoneNO,location){
        this.fullname=fullname;
        this.category=category;
        this.registrationNo=registrationNo;
        this.phoneNO=phoneNO;
        this.location=location;
    }
}

const collectedData=new formData(this)
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