const tempField = document.querySelector(".temp");

const locField = document.querySelector(".time-location p");

const dateField = document.querySelector(".time-location span");

const conditionField = document.querySelector(".condition p");

const searchField = document.querySelector(".search-area");

const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation)

let target = 'Lahore'

const fetchResults = async(targetLocation) => {

    let url = `http://api.weatherapi.com/v1/current.json?key=4c613ad52d8c49ebb3042635240107&q=${targetLocation}&aqi=no`
   
    const res =  await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName =  data.location.name

    let time = data.location.localtime

    let temp = data.current.temp_c

    let condition = data.current.condition.text

    updateDetails(temp , locationName , time , condition)
}


function updateDetails(temp , locationName , time , condition){

    let splitDate = time.split(" ")[0];

    let splitTime = time.split(" ")[1];

    let currentDay = DayName(new Date(splitDate).getDay())


    tempField.innerText = temp

    locField.innerText = locationName

    dateField.innerText = `${splitDate} ${currentDay} ${splitTime}`

    conditionField.innerText = condition
};


function searchForLocation(e){
    e.preventDefault()

    target = searchField.value

    fetchResults(target)
}


function DayName(n){
    switch(n){
        case 0 :
            return "Sunday";
        case 1 :
            return "Monday";
        case 2 :
            return "Tuesday";
        case 3 :
            return "Wedbessday";
        case 4 :
            return "Thursday";
        case 5 :
            return "Friday";
        case 6 :
            return "Saturday";
    }
}

fetchResults(target)