import { createStore } from "redux";

const add = document.getElementById("add"),
  minus = document.getElementById("minus"),
  number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  return count;
};

const countStore = createStore(countModifier);

const onchange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onchange);

add.addEventListener("click", () => countStore.dispatch({ type: "ADD" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
