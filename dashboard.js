
//--------------------------------------------------------
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    var taskText = document.createElement("span");
    taskText.innerText = taskInput.value;
    li.appendChild(taskText);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
            moveTaskToCompleted(li);
        } else {
            li.classList.remove("completed");
            moveTaskToPending(li);
        }
    });
    li.appendChild(checkbox);

    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function () {
        var newText = prompt("Edit task:", taskText.innerText);
        if (newText !== null) {
            taskText.innerText = newText;
        }
    });
    li.appendChild(editButton);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.parentNode.removeChild(li);
        }
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";

    moveTaskToPending(li);
}
//---------------for logout redirecting---------
function logoutbtn() {
    let url = window.location.href + "dashboard";
    window.location.replace(url);


}

//-------------------for registration redirecting------------
function registration() {
    let url2 = window.location.href + "user_registration";
    window.location.replace(url2);

}
//---------------------------
function moveTaskToCompleted(taskItem) {
    var completedTasks = document.getElementById("completedTasks");
    completedTasks.appendChild(taskItem);
}

function moveTaskToPending(taskItem) {
    var pendingTasks = document.getElementById("pendingTasks");
    pendingTasks.appendChild(taskItem);
}


///----------------------wather---------------------------------------


// document.addEventListener('DOMContentLoaded', function () {
//     const API_KEY = '5e6957d44d7c20277665a5e2945031a8'; 
//     const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=New York&appid=' + API_KEY + '&units=metric';


//     fetch(API_URL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             document.getElementById('location').textContent = data.name;
//             document.getElementById('temperature').textContent = data.main.temp;
//             document.getElementById('description').textContent = data.weather[0].description;
//             document.getElementById('humidity').textContent = data.main.humidity;
//             document.getElementById('wind-speed').textContent = data.wind.speed;
//         })
//         .catch(error => console.log('Error fetching weather data:', error));
// });

document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = '5e6957d44d7c20277665a5e2945031a8';
    const form = document.getElementById('weather-form');
    const input = document.getElementById('city-input');
    const resultContainer = document.getElementById('weather-result');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const city = input.value;
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resultContainer.innerHTML = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} &#8451;</p>
                    <p>Description: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            })


            .catch(error => {
                console.log('Error fetching weather data:', error);
                resultContainer.innerHTML = '<p>Failed to fetch weather data.</p>';
            });
    });
});


//------------------------------current time script-------------------------------

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('time').innerHTML = timeString;
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateTime, 1000);

updateTime();




//----------------------- random gif script--------------------


var gifUrls = [
    'https://media.giphy.com/media/8OcsWvaPQut7IHmmqx/giphy.gif',
    'https://media.giphy.com/media/dalJ0CpF7hwmN1nZXe/giphy.gif',
    'https://media.giphy.com/media/3iBnSbhSfSuebzcZvT/giphy.gif',
    // 'https://giphy.com/gifs/mls-shock-columbus-crew-aidan-morris-KZfe3I0owbzDQyeWHV',
    'https://media.giphy.com/media/VlFocaxe7AyqbyTzCT/giphy.gif'
];

function getRandomGifUrl() {
    return gifUrls[Math.floor(Math.random() * gifUrls.length)];
}

function updateRandomGif() {
    var randomGifUrl = getRandomGifUrl();
    document.getElementById('random-gif').src = randomGifUrl;
}

setInterval(updateRandomGif, 4000);

updateRandomGif();
