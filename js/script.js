 var link = document.querySelector(".feedback");
 var popup = document.querySelector(".modal-feedback");
 var close = popup.querySelector(".modal-close");
 var overlay = document.querySelector(".modal-overlay");
 var form = popup.querySelector("form");
 var userName = popup.querySelector("[name=user-name]");
 var userMail = popup.querySelector("[name=user-mail]");
 var isStorageSupport = true;
 var storage = "";

 try {
   storage = localStorage.getItem("userName");
 } catch (err) {
   isStorageSupport = false;
 }


 link.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("modal-show");
   overlay.classList.add("overlay-show");
   userName.focus();
   if (storage) {
     userName.value = storage;
     userMail.focus();
   } else {
     userName.focus();
   }
 });

 close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   overlay.classList.remove("overlay-show");
   popup.classList.remove("modal-error");
 });

 form.addEventListener("submit", function (evt) {
   if (!userName.value || !userMail.value) {
     evt.preventDefault();
     popup.classList.remove("modal-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
   } else {
     if (isStorageSupport) {
       localStorage.setItem("userName", userName.value);
     }
   }
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
       overlay.classList.remove("overlay-show");
       popup.classList.remove("modal-error");
     }
   }
 });
