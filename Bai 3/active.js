let listTab = document.querySelectorAll(".nav");
let listUsers = document.querySelectorAll(".user-info");

function updateTabActive(tabIndex) {
    listTab.forEach(tabItem =>{
        tabItem.classList.remove("nav-active");
    })
    listTab[tabIndex].classList.add("nav-active");
}
listTab.forEach((tabElements, tabIndex) =>{
    tabElements.addEventListener("click", e =>{
        updateTabActive(tabIndex);
    })
})

function updateUserActive(userIndex) {
    listUsers.forEach(userItem =>{
        userItem.classList.remove("user-active");
    })
    listUsers[userIndex].classList.add("user-active");
}
listUsers.forEach((userElements, userIndex) =>{
    userElements.addEventListener("click", e =>{
        updateUserActive(userIndex);
    })
})

updateTabActive(0);
updateUserActive(0);