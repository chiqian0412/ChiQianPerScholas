let key = 'Enter your API Key In Here'


// const toggleElement = () => {
//   // 1. We want to Change Color of GwenTxt
//   let skreen = document.querySelector('.hidden')

//   skreen.classList.toggle('showScreen')
// }

const createReservation = () => {
  let resConfirmed = prompt('Do you have a reservation ? ')
  if (resConfirmed === 'yes') {
    console.log('Cool Reservation Booked!')

    let hiddenDiv = document.querySelector('.peekaboo')

    hiddenDiv.innerHTML = 'Reservation Booked! '
  } else {
    alert('You Need To Make A reservation')
  }
}

const julian = () => {
  let noodle = document.querySelector('.mainTitle')
  noodle.classList.toggle('wexler2')
}

const go = () => {
  setInterval(() => {
    console.log('Uhhh')
  }, 3000)
}

const meetTeam1 = async() =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let info = await response.json()

    let minibox = document.querySelector('.shadow')
    minibox.innerHTML = "";
    info.forEach((person) =>{
        let divEl = document.createElement('div')
            divEl.setAttribute("class","profileCard")
            divEl.innerHTML()
            minibox.append(element.name);
    })
}


// const meetTeam = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((json) => {
//           let info = json
//         console.log(info)

//         info.forEach((element)=>{
//             let divEl = document.createElement('div')
//             divEl.setAttribute("class","profileCard")
//             document.body.append(divEl);
//             divEl.append(element.name);
//         })
//       })

// let targot = document.querySelector('.viewer');
// targot.classList.toggle('curtainHolder');
// }

// 1. Need to select an element to add an event listener to
const btnElment = document.querySelector(".btnChefs");
// 2. Define what type of event we want to add
// click
btnElment.addEventListener("click", meetTeam);
// 3. Define which function to couple to the event
///////// Event object
// 1. Select the element to attach
// 2. Add listener to the button
// newBtn.addEventListener("click", (e) => {
//   console.log(this);
//   console.log(e.currentTarget);
// });
const newBtn = document.querySelector("#btnOrder");
/// Creating element
newBtn.addEventListener("click", function () {
  // 1. Create a new <li>
  let liEl = document.createElement("li");
  // Add content to the new element
  liEl.innerHTML = "Order List";
  // 2. log that new element to the screen
  //   console.log(liEl);
  // Add element onto the body
  const divEl = document.querySelector(".screen");
  // Append element to the screen
  divEl.append(liEl);
}); 










// # Callback function

// # api request and output 
//     # fetch()
//         # .map ---  .filter 

// # object-oriented programming
//         # Encapsulation
//                     # let jordan = { 
//                     #     name: '',
//                     #     age: 0,
//                     #     occupation: ''
//                     #     introduceYourself: function(){
//                     #         console.log(`Hi, my name is #{name}`)
//                     #     }
//                     # }
//         # Abstraction
//         # Inheritance