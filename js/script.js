const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const people = document.getElementsByClassName("person");

const changePerson = () => {
  for (i = 0; i < people.length; i++) {
    people[i].classList.toggle("hide");
    people[i].classList.toggle("active");
  }
};

const handleKeyDown = (e) => {
  if (e.keyCode === 37 || e.keyCode === 39) {
    changePerson();
  }
};

// when clicking on image arrows
nextBtn.addEventListener("click", changePerson);
prevBtn.addEventListener("click", changePerson);

// right and left arrow keys on keyboard
window.addEventListener("keydown", handleKeyDown);
