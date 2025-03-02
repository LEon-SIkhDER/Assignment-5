// toggle js 
document.getElementById("discover").addEventListener("click", function (event) {
    event.preventDefault()
    window.location.href = "./blog.html"
}
)
// random color generator
document.getElementById("theme").addEventListener("click", function () {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    console.log(r, g, b)
    document.getElementById("bodyid").style.backgroundColor = `rgb(${r}, ${g}, ${b})`

})
// real date and day 
// theDay 
const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const today = new Date()
const day = today.getDay()
document.getElementById("the-day").innerText = allDays[day]
// theMonth 
const allMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = today.getMonth()
document.getElementById("the-month").innerText = allMonth[month]
// theDate 
const date = today.getDate()
document.getElementById("the-date").innerText = date
// theYear 
const year = today.getFullYear()
document.getElementById("the-year").innerText = year

// button alert main js 
document.getElementById("banner-board").addEventListener("click", function (event) {
    if (event.target.classList.contains("btn")) {
        alert("Board updated successfully")
        event.target.classList.add("disabled")
        // task number add 
        const task = Number(document.getElementById("task-assigned").innerText)
        const newTask = document.getElementById("task-assigned").innerText = task - 1
        // check number minus 
        const checkNumber = Number(document.getElementById("check-number").innerText)
        const newCheckNumber = document.getElementById("check-number").innerText = checkNumber + 1


        if (newTask === 0) {
            alert("Congrates!!! You have completed all the current task.")

        }
        // histories js
        const historiesP = document.createElement("p")
        const histories = document.getElementById("histories").appendChild(historiesP)
        // variables 
        const time = new Date().toLocaleTimeString()
        console.log(time)
        const box = event.target.closest(".box");
        const taskName = box.querySelector("h1").innerText
        console.log(taskName)

        historiesP.innerText = `You have Complete The Task ${taskName} at ${time}. Good Luck For Future Task!`
    }
})
// clear history 
document.getElementById("clear-history").addEventListener("click", function(event){
    document.getElementById("histories").innerHTML = ""
    

})