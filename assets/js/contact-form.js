

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("messages");
function sendEmail() {
  const bodyMessage = `Name: ${fullName.value} <br> Email: ${email.value} <br> Messages: ${message.value}`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mhemon2018@gmail.com",
    Password : "8D7AF510FF8EAFB4F676C42C4A172D266DF1",
    To : 'mhemon2018@gmail.com',
    From : "mhemon2018@gmail.com",
    Subject : "New Form Submit Portfolio Website",
    Body : bodyMessage
}).then(
  message => {
    Swal.fire({
      title: "Congratulation!",
      text: "Messages sent successfully!",
      icon: "success"
    });
  } 
);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
})