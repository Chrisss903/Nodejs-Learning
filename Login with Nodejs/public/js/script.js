document.getElementById('login').addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    }).then(response => console.log(response))

    const result = await response.json()

    if (result.success) {
        window.location.href = "homePage.html"
    }

})

document.getElementById('Signup').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name1').value;
    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    const response = await fetch('/Signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();
    alert(result.message);

    if (result.success) {
        window.location.href = "homePage.html"
    }
});