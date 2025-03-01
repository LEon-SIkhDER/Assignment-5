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
const date =  today.getDate()
document.getElementById("the-date").innerText = date
// theYear 
const year = today.getFullYear()
document.getElementById("the-year").innerText = year

