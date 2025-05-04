function getProfile() {
  const username = document.getElementById("username").value;
  const output = document.getElementById("output");

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) throw new Error("User not found");
      return response.json();
    })
    .then(data => {
      output.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" />
        <h2>${data.name || "No Name"}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Repos:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <p><a href="${data.html_url}" target="_blank">Visit Profile</a></p>
      `;
    })
    .catch(error => {
      output.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
