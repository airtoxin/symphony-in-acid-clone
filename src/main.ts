import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

const poetWordsLines = `
Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimmed,
And every fair from fair sometime declines,
By chance, or nature's changing course untrimmed:
But thy eternal summer shall not fade,
Nor lose possession of that fair thou ow'st,
Nor shall death brag thou wand'rest in his shade,
When in eternal lines to time thou grow'st,
So long as men can breathe or eyes can see,
So long lives this, and this gives life to thee
`.trim().split("\n").map(line => line.split(" "));

const elements: HTMLElement[] = [];

const colors = ["blue", "red", "black", "gray"];
for (const words of poetWordsLines) {
  for (const word of words) {
    const span = document.createElement("span");
    span.innerText = word;
    span.style.margin = "0 0.1rem";
    span.style.lineHeight = "2rem";
    updateElement(span);
    app.appendChild(span);
    elements.push(span);
  }
}

function updateElement(el: HTMLElement) {
  el.style.fontStyle = Math.random() < 0.1 ? "italic" : "";
  el.style.fontWeight = Math.random() < 0.1 ? "bold" : "";
  if (Math.random() < 0.1) {
    el.style.background = colors[Math.floor(Math.random() * 4)];
    el.style.color = "white";
  } else {
    el.style.background = "";
    el.style.color = "";
  }
  if (Math.random() < 0.1) {
    el.style.textDecoration = Math.random() < 0.5 ? "underline" : "underline overline";
  } else {
    el.style.textDecoration = "";
  }
  el.style.visibility = Math.random() < 0.1 ? "hidden" : "";
}

setInterval(() => {
  app.style.width = `${10 + Math.floor(Math.random() * 40)}rem`;
  app.style.transform = `translate(${20 + Math.random() * 60}vw, ${20 + Math.random() * 60}vh)`
  for (const el of elements) {
    updateElement(el);
  }
}, 3000);

const audio = document.querySelector<HTMLAudioElement>('audio');
document.addEventListener("click", () => {
  audio?.play();
});
