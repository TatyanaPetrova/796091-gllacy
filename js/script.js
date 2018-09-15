 var link = document.querySelector(".feedback");
 var popup = document.querySelector(".modal-feedback");
 var close = popup.querySelector(".modal-close");
 var overlay = document.querySelector(".modal-overlay")

 link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   overlay.classList.add("modal-show");
 });

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   overlay.classList.remove("modal-show");
 });
