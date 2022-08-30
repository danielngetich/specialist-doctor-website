function fetchimage(){
    fetch("http://localhost:3000/Doctors")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
    })
}
fetchimage()