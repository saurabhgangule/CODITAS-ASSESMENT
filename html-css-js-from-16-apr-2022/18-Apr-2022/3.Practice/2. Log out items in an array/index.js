let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function displayCourses(courses) {
    for(let index = 0; index < courses.length; index++) {
        console.log(courses[index]);
    }
}

displayCourses(myCourses);