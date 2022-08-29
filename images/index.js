function fetchhospitals(){
    fetch("https://hospital-indonesia.p.rapidapi.com/hospitalprov/")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
    })
}
fetchhospitals()
