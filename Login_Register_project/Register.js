function storedData(event) {
    event.preventDefult();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const password = document.getElementById('password').value;

    const user_data = {
        name: name,
        email: email,
        phone: phone,
        date: date,
        password: password
    };
}