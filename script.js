
const screen = document.querySelector(".textview");

function insert(num) {
  screen.value += num;
}

function equals() {
  screen.value = eval(screen.value);
}

function clean() {
  screen.value = "";
}

  function back(){
    let back= screen.value.toString();
    screen.value= back.slice(0,-1);

  }
