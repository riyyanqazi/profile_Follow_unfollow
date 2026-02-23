let followBtn = document.getElementById("followBtn");
let h3 = document.querySelector("h3");

let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

let count = 900;
let isFollowing = false;

h3.innerText = count;

followBtn.addEventListener("click", () => {
  if (isFollowing == false) {
    count++;
    followBtn.innerText = "UnFollow";
    h3.innerText = count;
    followBtn.style.background = "#313131";
    followBtn.style.border = "1px solid ";

    isFollowing = true;
  } else {
    count--;

    isFollowing == true;
    followBtn.style.background = "#0a693a";
    followBtn.innerText = "Follow";
    h3.innerText = count;

    isFollowing = false;
  }
});
