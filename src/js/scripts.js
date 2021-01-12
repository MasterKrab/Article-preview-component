const button = document.getElementById("button-social")
const social = document.getElementById("profile-social")


button.addEventListener("click", () => {
   button.classList.toggle("profile__icon--active")
   social.classList.toggle("profile-social--active")
})
