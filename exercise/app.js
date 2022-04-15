const drop = () => {
    //find element
    let dropMenu = document.querySelector('#dBtn')
    //change CSS
     dropMenu.style.height = "92px";
    //createElement
        // --> text
    let box = document.createElement('div')
    box.appendChild(box).innerHTML

    // dropMenu.appendChild(box)

}




const showLogin = () => {
    let login_btn = document.querySelector('.colorLink')
    let loginAnswer = prompt("Enter Email 4 Login")
    let screen = document.querySelector('.screen')
    // conditional
    if(loginAnswer.includes("@") && loginAnswer.includes(".")) {
        screen.innerHTML = loginAnswer
    }else {
        screen.innerHTML = "Something is wrong."
    }
}

const grillKnicksFan = () => {
    let location = prompt('where are you born?')
    const temperature = prompt('well, is it cold?')
    
    const height = prompt('well, is it cold?')
   
    const weight = prompt('well, is it cold?')

    let user = {
        name: 'chi',
        location: location,
        temp: temperature,
        height: height,
        weight: weight
    }
    console.log(user.name)
    let theater = document.querySelector('.screen')
    theater.append(`Name : ${user.name}`)
    
}