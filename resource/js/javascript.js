//check user input
$(document).ready(function() {
  $('.btn-primary').click(function(e) {
      e.preventDefault();

      var name = $('#name').val();
      var phone = $('#phone').val();
      var address = $('#address').val();
      var email = $('#email').val();


      if (!name) {

          alert('Please provide your name');
          return;
      } else if (!phone) {

          alert('Please provide your phone number.');
          return;
      } else if (!address) {
          alert('Please provide your address.');
          return;
      } else if (!email) {
          alert('Please provide your email address.');
          return;
      }

      //confirm window
      if (confirm('Are you sure you want to submit the order?')) {
          $('#orderModal').modal('show'); //modal show
      }



  });

  //btn clear
  $('.btn-secondary').click(function() {
      $('input[type="text"], textarea').val('');
  });


});

//price calculation
const btnOrder = document.querySelector('#buyBtn');
btnOrder.addEventListener('click', (event) => {
  let checkboxes = document.querySelectorAll(
      'input[name="chkItem"]:checked'
  );

  let values = []; // array  is used to store selections .
  let i = 0; //array index number
  let total = 0; // total amount

  //foreach loop
  checkboxes.forEach((checkbox) => {
      values.push(checkbox.value); //save the value of checkbox to array

      if (values[i] == "a4tech") {
          total += 1020.00;
      } else if (values[i] == "g102") {
          total += 930.00;
      } else if (values[i] == "mckeyboard") {
          total += 2500.00;
      } else if (values[i] == "980Pro") {
          total += 5500.00;
      }
      i++;
  });

  //alert("The total amount Ordered is "+total+".00") //alert box

  document.getElementById("aTotal").innerHTML = "₱ " + total + ".00"; //display total amount 


});