/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/human-skull.png";

window.onload = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let master_excuse = [who, action, what, when];
  let excuse = "";
  for (let i = 0; i < 4; i++) {
    let x = master_excuse[i].length;
    let y = Math.floor(Math.random() * x);
    let z = master_excuse[i][y];
    excuse = excuse + z + " ";
  }

  document.querySelector("#the-excuse").innerHTML = excuse;
  console.log(excuse);
};
