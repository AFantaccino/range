const tempNumbs = [];
let idx = 0;

function range(min, max, ...numbers) {
  for (const number of numbers) {
    const numberDiv = document.querySelector(`.number${numbers.indexOf(number)}`).classList;

    if (number >= min && number <= max) {
      numberDiv.remove("wrong");
      numberDiv.add("correct");
    } else {
      numberDiv.remove("correct");
      numberDiv.add("wrong");
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (tempNumbs[0] != undefined) {
    range(form[0].value, form[1].value, ...tempNumbs);
  }
});

addBtn.addEventListener("click", () => {
  tempNumbs.push(Number(form[2].value));

  showingDiv.innerHTML = showingDiv.innerHTML.concat('<div class="number', idx, '">', tempNumbs[idx], "<button>X</button>", "</div>");

  idx++;
});

showingDiv.addEventListener("click", (e) => {
  let targetId = Array.from(showingDiv.children).indexOf(e.target.parentElement);

  if (e.target.tagName == "BUTTON") {
    e.target.parentElement.remove();
    tempNumbs.splice(targetId, 1);
  }
});
