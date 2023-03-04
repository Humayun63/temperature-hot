// API KEY
const apiKey = `ae341ad81ea9f867afffd4da078c2580`;
const loadData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayData(data);
    } catch (error) {
        console.log(error)
    }
}
const setInnerTextById = (id, text) => document.getElementById(id).innerText = text;

const displayData = (data) => {
    console.log(data);
    if (data.message === 'city not found') {
        alert('City not found');
    } else {
        console.log(data.sys.country);
        setInnerTextById('temp', data.main.temp);
        setInnerTextById('weather', data.weather[0].main);
        const city = `${data.name}, ${data.sys.country}`
        setInnerTextById('city', city);
    }
}
const searchField = document.getElementById('search-field');
const loadBySerch = () => {
    const city = searchField.value;
    searchField.value = '';
    loadData(city);
}
searchField.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        loadBySerch();
    }
})

document.getElementById('search-btn').addEventListener('click', function () {
    loadBySerch();
});
loadData('Dhaka');