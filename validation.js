<html>
<head>
<script>
function Validation()
{
var name = document.forms.RegForm.Name.value;
var email = document.forms.RegForm.EMail.value;
var phone = document.forms.RegForm.Telephone.value;
var what = document.forms.RegForm.Subject.value;

var address = document.forms.RegForm.Address.value;
var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//Javascript reGex for Email Validation.
var regPhone=/^\d{10}$/;
// Javascript reGex for Phone Number validation.
var regName = /\d+$/g;
// Javascript reGex for Name validation
if (name == "" || regName.test(name))
{
window.alert("Please enter your name properly.");
name.focus();
return false;
}
if (address == "")
{
window.alert("Please enter your address.");
address.focus();
return false;
}

if (email == "" || !regEmail.test(email))
{
window.alert("Please enter a valid e-mail address.");
email.focus();
return false;
}

if (password == "*")
{
alert("Please enter your password");
password.focus();
return false;
}

if (phone == "" || !regPhone.test(phone)) {
alert("Please enter valid phone number.");
phone.focus();
return false;
}
if (what.selectedIndex == -1)
{
alert("Please enter your course.");
what.focus();
return false;
}
return true;
}
</script>
</head>
<body>

<h1 style="text-align: center;">REGISTRATION FORM</h1><hr><br>
<form name="RegForm" onsubmit="return Validation()" method="post">

<p>Name: <input type="text" size="50" name="Name" /></p>
<br />

<p>Address: <input type="text" size="50" name="Address" /></p>
<br />

<p>E-mail Address: <input type="text" size="50" name="EMail" /></p>
<br />

<p>Telephone: <input type="text" size="50" name="Telephone" /></p>
<br />
<p>
SELECT YOUR COURSE
<select type="text" value="" name="Subject">
<option>BTECH</option>
<option>BBA</option>
<option>BCA</option>
<option>B.COM</option>
<option>GEEKFORGEEKS</option>
</select>
</p>
<br />
<br />

<p>
Comments: <textarea cols="55" name="Comment"> </textarea></p>
<p>
<input type="submit" value="Submit" name="Submit" />

<input type="reset" value="Reset" name="Reset" />
</p>
</form>
</body>
</html>
