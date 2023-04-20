import Dog from './Dog.js'
import dogs from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)
render()

function render() {
    document.getElementById('card').innerHTML = currentDog.getDogHtml()
}

function getNewDog() {
    currentDogIndex = currentDogIndex + 1

    if(currentDogIndex < dogs.length){
        currentDog = new Dog(dogs[currentDogIndex])
        render()
    }else{
        currentDogIndex = 0
        currentDog = new Dog(dogs[currentDogIndex])
        render()
    }    
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById('dog-info').insertAdjacentHTML("beforebegin", currentDog.yes())
    setTimeout(()=>{
        getNewDog()     
    }, 1500)
}

function no() {
    currentDog.setMatchStatus(false)
    document.getElementById('dog-info').insertAdjacentHTML("beforebegin", currentDog.no())
    currentDog.no()
    setTimeout(()=>{
        getNewDog()     
    }, 1500)
}