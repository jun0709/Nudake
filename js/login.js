const btn = document.getElementById('login');
const modal = document.getElementById('login_outer');
const closeBtn = document.getElementById('closeBtn');
const login_box = document.getElementsByClassName('login_box')[0];
const btn1 = document.getElementById('Sign');
const modal1 = document.getElementById('Sign_outer');
const closeBtn1 = document.getElementById('closeBtn1');
const Sign_box = document.getElementsByClassName('Sign_box')[0];
const cancel = document.getElementById('cancel');
const sign_btn = document.getElementById('sign_btn');
btn.onclick = function() {
    modal.style.display = 'block';
    setTimeout(() => {
        login_box.style.opacity = '1';
      }, 0);
}
closeBtn.onclick = function() {
  modal.style.display = 'none';
  login_box.style.opacity = '0';
};
sign_btn.onclick = function(){
  modal.style.display = 'none';
  login_box.style.opacity = '0';
  modal1.style.display = 'block';
  setTimeout(() => {
      Sign_box.style.opacity = '1';
    }, 0);
}

btn1.onclick = function() {
  modal1.style.display = 'block';
  setTimeout(() => {
      Sign_box.style.opacity = '1';
    }, 0);
}
closeBtn1.onclick = function() {
  modal1.style.display = 'none';
  login_box.style.opacity = '0';
};
cancel.onclick = function(){
  modal1.style.display = 'none';
  login_box.style.opacity = '0';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    login_box.style.opacity = '0';
  }
else if (event.target == modal1) {
  modal1.style.display = "none";
  Sign_box.style.opacity = '0';
}
}

