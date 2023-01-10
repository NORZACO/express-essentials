
// Define three callback functions 
function userAge() {
    let user_age = "24"
    return user_age
}

function userSchool() {
    let user_school = "NOROFF"
    return user_school
}

function projectInfo() {
    let project_info = "Create a Web Application for Firma REMA 1000"
    return project_info
}

function Username() {
    let brukernavnet = 'Jonathan Braaten Mjøs'
    return brukernavnet
}


// Create a function that takes in the callbacks as arguments
function userInfo(fourite_food, ageCallback, usernameCallback, schoolCallback, projectCallback) {
    // callbacks
    let callback = ageCallback(fourite_food)
    let callback2 = usernameCallback(callback)
    let callback3 = schoolCallback(callback2)
    let callback4 = projectCallback(callback3)
    let getInfo =  `| Favourite food: ${fourite_food} | "Age: ", ${callback} | "Username: ", ${callback2} | "School: " ${callback3} | "Project: " ${callback4}|`
    return getInfo
}

console.log(userInfo("pizza", userAge, Username, userSchool, projectInfo))



