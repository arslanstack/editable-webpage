

var filename;
function banner() {
    $("#files").change(function () {
        filename = this.files[0].name;
        tars = filename;
        console.log(filename);
        var element = document.getElementById("workng");
        element.style.backgroundImage = "url('" + filename + "')";
    });

}
function banner2() {
    $("#files2").change(function () {
        filename = this.files[0].name;
        console.log(filename);
        var element = document.getElementById("aboutUs");
        element.style.background = "url('" + filename + "')";
    });

}

var loadFile = function(event) {
    console.log("Function ran for card")
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('card1img');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
var loadFile2 = function(event) {
    console.log("Function ran for card2")
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('card2img');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
var loadFile3 = function(event) {
    console.log("Function ran for card3")
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('card3img');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
var loadFile4 = function(event) {
    console.log("Function ran for card4")
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('topimg');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
// var loadFile2 = function(event) {
//     console.log("Function ran for card")
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('card2img');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };
// var loadFile3 = function(event) {
//     console.log("Function ran for card")
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('card3img');
//       output.src = reader.result;
//     };
//     reader.readAsDataURL(event.target.files[0]);
// };