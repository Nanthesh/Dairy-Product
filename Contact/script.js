const data = document.getElementById("formData");

data.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = document.getElementById('exampleInputName1').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const phone = document.getElementById('exampleInputPhone1').value;
    const wayToContact = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    const comments= document.getElementById('floatingTextarea2').value;
    const userDetails = {
        userName,
        email,
        wayToContact,
        comments
    };

    localStorage.setItem(phone, JSON.stringify(userDetails));
});


const phone = document.getElementById('exampleInputPhone1').value;
const storedData = localStorage.getItem(phone);

if (storedData) {
    const userDetails = JSON.parse(storedData);
    document.getElementById('exampleInputName1').value = userDetails.userName;
    document.getElementById('exampleInputEmail1').value = userDetails.email;

    const selectedRadio = document.querySelector(`input[name="inlineRadioOptions"][value="${userDetails.wayToContact}"]`);

    if (selectedRadio) {
        selectedRadio.checked = true;
    }
    document.getElementById('floatingTextarea2').value=userDetails.comments;
}
