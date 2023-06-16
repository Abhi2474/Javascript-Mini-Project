const left = document.querySelector(".left");
const right = document.querySelector(".right");
const items = document.querySelectorAll(".item");
const dialog = document.getElementById("dialog");
const toastBox = document.querySelector(".toastBox");

// created the element for the success message
const msg = document.createElement("span");

// loop all the draggable elements
items.forEach((item) => {
  // inside the "dragstart" event listener function, the current element being dragged is stored in the selected variable using e.target.
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;
    item.style.color = "#0C134F"; // change the color when the dragstarts

    // for success message
    msg.innerText = e.target.innerText;

    // prepend the created success message element into the dialog element
    dialog?.prepend(msg);

    // The dragover event listener prevents the default behavior of the element, allowing it to be a valid drop target.
    right?.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    right?.addEventListener("drop", (e) => {
      right.appendChild(selected);
      showToast(selected.innerText);
      selected = null;
      dialog?.showModal();
      item.style.color = "darkred";
    });

    // same for the left container
    left?.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    left?.addEventListener("drop", (e) => {
      left.appendChild(selected);
      showToast(selected.innerText);
      selected = null;
      item.style.color = "darkblue";
      dialog?.showModal();
    });
  });
});

// toast notification function
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = `${msg} added successfully !!`;

  toastBox?.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
