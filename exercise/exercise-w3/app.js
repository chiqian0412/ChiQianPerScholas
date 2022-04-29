

let uhVariable = "somethingLikeThis"

const thisIsAFunction = () =>{
    console.log("Function Executed!")
}



//   const goGetData = () => {
//     fetch('https://fakestoreapi.com/products/categories',{
//         // headers:  {
//         // 'Content-Type': 'application/json'
//         // }
//     })
//     .then(res => res.json()).then((json)=>{
//         console.log(json)
//          let bday = prompt("Enter Number 1-4 ?")
//          document.querySelector('.title').innerHTML =  json[1]
//     })
// }
    const goGetData2 = () => {
        fetch('https://fakestoreapi.com/products/1',{
            // headers:  {
            // 'Content-Type': 'application/json'
            // }
        })

        .then(res => res.json()).then((json)=>{
            console.log(json.title)
            let date = prompt("Enter Number 1-7 ?")
            document.querySelector('.title').innerHTML =  json[1]
        })
    }

    const getData3 = () =>{
        let tv=prompt('Enter the movie title');
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=bcd700ea&?t=${tv}`)
            .then(Response=>Response.json())
                .then((json)=>{
                    let bigDate = json;
                    console.log(bigDate)
                    let show={
                        name:tv,
                        title:bigDate.Title,
                        year:bigDate.Year,
                        writer:bigDate.Writer,
                        actors:bigDate.Actors,
                        plot:bigDate.Plot,
                        poster:bigDate.Poster
                    }
                    console.log(show)
                    document.querySelector('.retainer').innerHTML = show.title;
                    document.querySelector('.propic').setAttribute("src",show.poster);
                    document.querySelector('.contentHolder').innerHTML = show.plot;
                })
    }



    const toggleRetainer =() =>{
        var element = document.getElementById(".retainer");
        element.classList.toggle("thisIsAKeyFrame");
      }