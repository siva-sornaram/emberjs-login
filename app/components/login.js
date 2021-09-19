import Component from '@glimmer/component';

export default class LoginComponent extends Component {
  uname = '';
  pass = '';

  
    validate_user = () => {
    var userData = {
      uname: this.username,
      pass: this.password,
    };
    console.log(userData);
    // fetch('http://localhost:8080/loginbackend/login', {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    // },
    // }).then(data => {
    //   console.log(data);
    // }).catch(err => {
    //   console.log(err);
    // });

    $.post("http://localhost:8080/loginbackend/login", JSON.stringify(userData))

  }

}
    
    // $.ajax ({
    //   type: 'POST',
    //   url: 'http://localhost:8080/loginbackend/login',
    //   dataType: 'json',
    //   data: JSON.stringify(userData),
    //   success: function(date) {
    //     alert("Success");
    //     console.log(data);
    //   },
    //   error: function(data) {
    //     alert("fail");
    //     console.log(data);
    //   }
    // });



//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:8080/loginbackend/login', true);
//     xhr.send();
//     xhr.onreadystatechange = function(){
//       if (xhr.readyState === 4){
//          if (xhr.status === 200){
//             console.log("xhr done successfully");
//             var response = xhr.responseText;
//             var responseJson = JSON.parse(response);
//          } else {
//            console.log("xhr failed");
//          }
//       } else {
//          console.log("xhr processing going on");
//       }
//    }
//    console.log("request sent succesfully");
//  }
