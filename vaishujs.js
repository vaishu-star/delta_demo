// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();

// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();
// let btn=document.querySelector("button");
// btn.addEventListener("click",async() => {
//     let fact= await getFact();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// })
// let url="https://catfact.ninja/fact";
// async function getFact(){
    
//     try{

//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){

//     console.log(err);
//     }
// }


//activity using query string
// 

    let url = "http://universities.hipolabs.com/search?country=";
    let btn = document.querySelector("button");

    btn.addEventListener("click", async () => {
      let country = document.querySelector("input").value.trim();
      console.log("Searching for:", country);

      let colleges = await getColleges(country);
      show(colleges);
    });

    async function getColleges(country) {
      try {
        let res = await fetch(url + country);   // fetch API
        let data = await res.json();
        return data;
      } catch (e) {
        console.log("Error:", e);
        return [];
      }
    }

    function show(colleges) {
      let lis = document.querySelector("#list");
      lis.innerHTML = ""; // clear old results

      for (let coll of colleges) {
        let li = document.createElement("li");
        li.innerText = coll.name;
        lis.appendChild(li);
      }
    }