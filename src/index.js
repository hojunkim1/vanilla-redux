import { createStore } from "redux";

const add = document.getElementById("add"),
  minus = document.getElementById("minus"),
  number = document.querySelector("span");

const ADD = "ADD",
  MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onchange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onchange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
