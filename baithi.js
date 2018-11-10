var btnSubmit = document.forms[0]["btn-submit"];
var content = '';
var e=false;
var b=false;
var c=false;
btnSubmit.onclick = function () {
    var txtusername = document.forms[0]["username"];
    var msgUsername = txtusername.nextElementSibling;
    if (txtusername == null || txtusername.value.length === 0) {
        msgUsername.innerHTML = "*Vui lòng nhập tên!";
        msgUsername.classList.add("danger-text");
        msgUsername.classList.remove("hidden-text");
    } else if (txtusername.value.length > 50) {
        msgUsername.innerHTML = "*Tên quá ngắn!";
        msgUsername.classList.remove("success-text");
        msgUsername.classList.add("danger-text");
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "Tên hợp lệ.";
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
        msgUsername.classList.remove("hidden-text");
        content += 'ten nguoi dung:' + txtusername.value + '<br>';
        e = true;
    }
    var txtpassword = document.forms[0]["phone"];
    var msgpassword = txtpassword.nextElementSibling;
    if (txtpassword == null || txtpassword.value.length === 0) {
        msgpassword.innerHTML = "*vui lòng nhập sdt";
        msgpassword.classList.remove("success-text");
        msgpassword.classList.add("danger-text");
        msgpassword.classList.remove("hidden-text");
    } else {
        msgpassword.innerHTML = "sdt hợp lệ.";
        msgpassword.classList.remove("danger-text");
        msgpassword.classList.add("success-text");
        msgpassword.classList.remove("hidden-text");
        content += 'sdt nguoi dung:' + txtpassword.value + '<br>';
        b = true;
    }
    var txtEmail = document.forms[0]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var a = txtEmail.value.includes("@");
    if (txtEmail == null || txtEmail.value.length === 0) {
        msgEmail.innerHTML = "Vui Long nhap email!";
        msgEmail.classList.remove("success-text");
        msgEmail.classList.add("danger-text");
        msgEmail.classList.remove("hidden-text");
    }
    else if (a === false) {
        msgEmail.innerHTML = "Sai cú pháp email!";
        msgEmail.classList.remove("success-text");
        msgEmail.classList.add("danger-text");
        msgEmail.classList.remove("hidden-text");
    }
    else {
        msgEmail.innerHTML = "Email hợp lệ.";
        msgEmail.classList.remove("danger-text");
        msgEmail.classList.add("success-text");
        msgEmail.classList.remove("hidden-text");
        content += 'email nguoi dung' + txtEmail.value + '<br>';
        c = true;
    }
    var gender = document.forms[0]["gender"].value;
    var sothich = document.forms[0]["a"];
    var txtsothich = '';
    for (const d of sothich) {
        if (d.checked) {
            txtsothich += d.value + ' ';
        }
    }
    var goithieu = document.forms[0]["textarea"].value;

    content += 'gender:' + gender + '<br>';
    content += 'so thich:' + txtsothich + '<br>';
    content += 'gioi thieu:' + goithieu + '<br>';
    if (e === true && b === true && c === true) {
        document.getElementsByClassName('text2')[0].innerHTML = content;
    }
    if (window.loaded ){
        content='';

    }
};