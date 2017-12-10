
//            function  demo() {
////                document.write('Hello Bangladesh');
//                var firstName = 'Shetu';
//                var lastName = 'Chowdhury';
//                var fullName = firstName+' '+lastName;
//                document.write(fullName);
//            }
//            document.write('<br/>==================<br/>')
//            demo();
//            document.write('<br/>==================<br/>')
//            demo();
//            document.write('<br/>==================<br/>')
//            demo();

//            function  demo(firstName, lastName) {
//                var fullName = firstName+' '+lastName;
//                document.write(fullName);
//            }
//
//            document.write('<br/>==================<br/>')
//            demo('Shetu', 'Chowdhury');
//            document.write('<br/>==================<br/>')
//            demo('Sany', 'Chowdhury');
//            document.write('<br/>==================<br/>')
//            demo('Shahed', 'Chowdhury');

var btnElement = document.getElementById('btn');
//            alert(btnElement); //no need to click, if reload than show.
// btnElement.onclick = function () {
// //                alert('test'); //on test perpuse.
//     var firstNameValue = document.getElementById('firstName').value;
// //                alert(firstNameValue); //on test perpuse.
//
//     var lastNameValue = document.getElementById('lastName').value;
// //                alert(lastNameValue); //on test perpuse.
//     var fullNameValue = firstNameValue +' '+lastNameValue;
// //                alert(fullNameValue); //on test perpuse.
//
//     document.getElementById('fullName').value = fullNameValue; //Shetu Chowdhury

    btnElement.onclick = function () {
        var firstNameValue = document.getElementById('firstName').value;
        var lastNameValue = document.getElementById('lastName').value;
        var fullNameValue = firstNameValue +' '+lastNameValue;

        document.getElementById('fullName').value = fullNameValue; //Shetu Chowdhury

        var additionbtn = document.getElementById('addition');
        additionBtn.onclick = function () {
            var firstNumberValue = document.getElementById('firstNumber').value;
            var lastNumberValue = document.getElementById('lastNumber').value;
            var result = firstNumberValue+lastNumberValue;
        }
};




