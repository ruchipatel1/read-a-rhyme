var num = 1;

function addFormRow() {
  num += 1;
  document.getElementById("body").innerHTML += "<div class='row pt-2'><div class='col'><input required type='text' class='form-control' placeholder='Student name' aria-label='name_"+num+"' id='name_"+num+"'></div><div class='col'><input type='email' required class='form-control' placeholder='Student email' aria-label='email_"+num+"' id='email_"+num+"'></div></div>";
}

function addStudents() {
  var name;
  for (i = 1; i < num + 1; i++) {
    name = document.getElementById("name_" + i).value;
    document.getElementById("students").innerHTML += "<div class='card collapse show mt-2' id='student_new_"+num+"'><div class='card-body'><div class='d-flex'><p class='mb-0 me-auto'>"+name+"</p><p class='mb-0 me-2 text-secondary'>Pending</p><a class='btn-close' data-bs-toggle='collapse' href='#student_new_"+num+"' role='button' aria-expanded='true' aria-controls='student_new_+"+num+"+'></a></div></div></div>"
  }
  bootstrap.Modal.getInstance(exampleModal).hide();
}