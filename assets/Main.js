var modal = document.getElementById("Modal");
const body = document.getElementById("body");
const greet = document.getElementById("greet");
const contValue = document.getElementById("contValue");
var phone = document.getElementById("phone");
var WhatsApp = document.getElementById("WhatsApp");
var Email = document.getElementById("Email");
var btn = document.getElementById("CheckIn");
var span = document.getElementsByClassName("close")[0];
var cont = document.getElementById("contact");
var submit = document.getElementById("submit");
const name = document.getElementById("name");
var formel = document.getElementById("myForm");
var method = "";

function Book() {
  modal.style.display = "block";
  body.style.display = "block";
  greet.style.display = "none";
  cont.style.display = "none";
  contValue.style.display = "none";
  formel.reset();
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

phone.onclick = function () {
  cont.style.display = "block";
  contValue.style.display = "block";
  contValue.innerHTML = "Phone";
  cont.placeholder = "+964 xx xxxxxxx";
  method = "phone";
};

WhatsApp.onclick = function () {
  cont.style.display = "block";
  contValue.style.display = "block";
  contValue.innerHTML = "WhatsApp";
  cont.placeholder = "+964 xx xxxxxxx";
  method = "whatsapp";
};

Email.onclick = function () {
  cont.style.display = "block";
  contValue.style.display = "block";
  contValue.innerHTML = "Email";
  cont.placeholder = "****@gmail.com";
  method = "email";
};

formel.onsubmit = async (e) => {
  e.preventDefault();
  let obj = {
    name: name.value,
    contactMethod: `${method} ${cont.value} -Clinic : lookswoow `,
  };

  let response = await fetch(
    "https://gwhb7l31r0.execute-api.eu-central-1.amazonaws.com/default/clinicsMailerFunction",
    {
      method: "POST",
      body: JSON.stringify(obj),
    }
  );

  if (response.status == 200) {
    fbq("track", "Lead");
    body.style.display = "none";
    greet.style.display = "block";
    formel.reset();
  }
};
