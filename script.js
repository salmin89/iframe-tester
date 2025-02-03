const params = new URLSearchParams(window.location.search)
document.body.innerText = params.get('text');