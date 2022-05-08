async function logoutHandler(event) {
    event.preventDefault();
    console.log('contributor logged out');
    const response = await fetch(`/api/users/logout`, {
        method: 'POST'
    })

    if (response.ok) {

        document.location.replace(`/`);
    }
}

document.querySelector('#logout').addEventListener('click', logoutHandler);