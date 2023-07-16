
var fNameRegEx = /^([a-zA-Z ]{2,40})+$/;
var lNameRegEx = /^([a-zA-Z ]{2,40})+$/;
var conNoRegEx = /^([0-9]{10})$/;
var emailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;

document.addEventListener('DOMContentLoaded', function () {

    var fnameInput = document.getElementById('fname');
    var fnameValidation = document.getElementById('fnameValidation');

    fnameInput.addEventListener('blur', function () {
        fnameValidation.innerHTML = '';
        if (fnameInput.value == '' || fnameInput.value == null) {
            fnameValidation.innerHTML = '(*) Name Required..!!';
        }
        else {
            if (!fnameInput.value.match(fNameRegEx)) {
                fnameValidation.innerHTML = '(*) Invalid Name..!!';
            }
        }
    });

    fnameInput.addEventListener('keypress', function (e) {
        fnameValidation.innerHTML = '';
        var flag = ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122));
        if (flag == false) {
            fnameValidation.innerHTML = '(*) Invalid Name..!!';
        }
        return flag;
    });

    var lnameInput = document.getElementById('lname');
    var lnameValidation = document.getElementById('lnameValidation');

    lnameInput.addEventListener('blur', function () {
        lnameValidation.innerHTML = '';
        if (lnameInput.value == '' || lnameInput.value == null) {
            lnameValidation.innerHTML = '(*) Name Required..!!';
        }
        else {
            if (!lnameInput.value.match(lNameRegEx)) {
                lnameValidation.innerHTML = '(*) Invalid Name..!!';
            }
        }
    });

    lnameInput.addEventListener('keypress', function (e) {
        lnameValidation.innerHTML = '';
        var flag = ((e.which >= 65 && e.which <= 90) || (e.which >= 97 && e.which <= 122));
        if (flag == false) {
            lnameValidation.innerHTML = '(*) Invalid Name..!!';
        }
        return flag;
    });

    var contactInput = document.getElementById('contact');
    var contactValidation = document.getElementById('contactValidation');

    contactInput.addEventListener('blur', function () {
        contactValidation.innerHTML = '';
        if (contactInput.value == '' || contactInput.value == null) {
            contactValidation.innerHTML = '(*) Contact Number Required..!!';
        }
        else {
            if (!contactInput.value.match(conNoRegEx)) {
                contactValidation.innerHTML = '(*) Invalid Contact Number..!!';
            }
        }
    });

    contactInput.addEventListener('keypress', function (e) {
        contactValidation.innerHTML = '';
        var flag = ((e.which >= 48 && e.which <= 57));
        if (flag == false) {
            contactValidation.innerHTML = '(*) Invalid Contact Number..!!';
        }
        return flag;
    });

    var emailInput = document.getElementById('email');
    var emailValidation = document.getElementById('emailValidation');

    emailInput.addEventListener('blur', function () {
        emailValidation.innerHTML = '';
        if (emailInput.value == '' || emailInput.value == null) {
            emailValidation.innerHTML = '(*) Email Required..!!';
        }
        else {
            if (!emailInput.value.match(emailIdRegEx)) {
                emailValidation.innerHTML = '(*) Invalid Email..!!';
            }
        }
    });

    var msgInput = document.getElementById('msg');
    var msgValidation = document.getElementById('msgValidation');

    msgInput.addEventListener('blur', function () {
        msgValidation.innerHTML = '';
        if (msgInput.value == '' || msgInput.value == null) {
            msgValidation.innerHTML = '(*) Message Required..!!';
        }
        else {
            if (msgInput.value.length > 300) {
                msgValidation.innerHTML = '(*) Invalid Message..!!';
            }
        }
    });

    var btnSubmit = document.getElementById('btnSubmit');

    btnSubmit.addEventListener('click', function () {
        fnameValidation.innerHTML = '';
        if (fnameInput.value == '' || fnameInput.value == null) {
            fnameValidation.innerHTML = '(*) Name Required..!!';
            fnameFlag = false;
        }
        else {
            if (!fnameInput.value.match(fNameRegEx)) {
                fnameValidation.innerHTML = '(*) Invalid Name..!!';
                fnameFlag = false;
            }
            else {
                fnameFlag = true;
            }
        }

        lnameValidation.innerHTML = '';
        if (lnameInput.value == '' || lnameInput.value == null) {
            lnameValidation.innerHTML = '(*) Name Required..!!';
            lnameFlag = false;
        }
        else {
            if (!lnameInput.value.match(lNameRegEx)) {
                lnameValidation.innerHTML = '(*) Invalid Name..!!';
                lnameFlag = false;
            }
            else {
                lnameFlag = true;
            }
        }

        contactValidation.innerHTML = '';
        if (contactInput.value == '' || contactInput.value == null) {
            contactValidation.innerHTML = '(*) Contact Number Required..!!';
            contactFlag = false;
        }
        else {
            if (!contactInput.value.match(conNoRegEx)) {
                contactValidation.innerHTML = '(*) Invalid Contact Number..!!';
                contactFlag = false;
            }
            else {
                contactFlag = true;
            }
        }

        emailValidation.innerHTML = '';
        if (emailInput.value == '' || emailInput.value == null) {
            emailValidation.innerHTML = '(*) Email Required..!!';
            emailFlag = false;
        }
        else {
            if (!emailInput.value.match(emailIdRegEx)) {
                emailValidation.innerHTML = '(*) Invalid Email..!!';
                emailFlag = false;
            }
            else {
                emailFlag = true;
            }
        }

        msgValidation.innerHTML = '';
        if (msgInput.value == '' || msgInput.value == null) {
            msgValidation.innerHTML = '(*) Message Required..!!';
            msgFlag = false;
        }
        else {
            if (msgInput.value.length > 300) {
                msgValidation.innerHTML = '(*) Invalid Message..!!';
                msgFlag = false;
            }
            else {
                msgFlag = true;
            }
        }

        if (fnameFlag == true && lnameFlag == true && contactFlag == true && emailFlag == true && msgFlag == true) {
            fnameInput.value = '';
            lnameInput.value = '';
            contactInput.value = '';
            emailInput.value = '';
            msgInput.value = '';
            alert('Form submitted successfully...');
        }
        else {
            alert('Invalid input...');
        }
    });

    btnReset.addEventListener('click', function (){
        fnameValidation.innerHTML = '';
        lnameValidation.innerHTML = '';
        contactValidation.innerHTML = '';
        emailValidation.innerHTML = '';
        msgValidation.innerHTML = '';
    });

});