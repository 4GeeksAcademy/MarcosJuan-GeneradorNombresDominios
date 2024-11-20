let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let textForLoop = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      textForLoop += (
        <li class="list-group-item">
          ${pronoun[i]}${adj[j]}${noun[k]}
        </li>
      );
    }
  }
}

document.querySelector("#excuse-list").innerHTML = textForLoop;
