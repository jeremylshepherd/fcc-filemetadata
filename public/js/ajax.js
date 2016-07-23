// var form = document.getElementById('fileForm');
// var fileSelect = document.getElementById('fileInput');
// var uploadButton = document.querySelector('.btn');
// var url = "https://fcc-file-microservice-jeremylshepherd.c9users.io/file";

// form.onsubmit = function(event) {
//   event.preventDefault();

//   // Update button text.
//   uploadButton.innerHTML = 'Uploading...';
  
//   // Get the selected files from the input.
//   var files = fileSelect.files;
  
//   var file = files[0];


//   // Create a new FormData object.
//   var formData = new FormData();


//   // Add the file to the request.
//   formData.append('file', file, file.name);

//   //The FormData.append() method is used to handle Files, Blobs, or Strings.

//   // Files
//   formData.append(name, file, 'daFile');  

//   //new XMLHttpRequest object.
//   // Set up the request.
//   var xhr = new XMLHttpRequest();


//   // Open the connection.
//   xhr.open('POST', url, true);

//   // Set up a handler for when the request finishes.
//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       // File(s) uploaded.
//       uploadButton.innerHTML = 'Submit';
//     } else {
//       console.log('An error occurred!');
//     }
//   };

//   // Send the Data.
//   xhr.send(formData);
// }

var url = "https://fcc-file-microservice-jeremylshepherd.c9users.io/";
function submitThis(item){
    
    $.ajax({
      url: url + "another",
      dataType: 'json',
      cache: false,
      data: item,
      success: function(data) {
        console.log("Woo-hoo!");
      },
      error: function(xhr, status, err) {
        console.log("Aw, nuts!");
      }
    });
}

$('#testForm').on('submit', )