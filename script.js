function getUser() {
    const body = document.body;
  
    let username = prompt("Please enter a GitHub username");
  
    if (!username) {
      body.innerHTML = "User not found";
    } else {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("User not found");
          }
          return response.json();
        })
        .then((user) => {
          body.innerHTML = `
            <div>
              <h2>${user.login}</h2>
              <img src="${user.avatar_url}" alt="${user.login}'s avatar" width="150"/>
              <p>Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
            </div>
          `;
        })
        .catch((error) => {
          body.innerHTML = `Error: ${error.message}`;
        });
    }
  }
  
  getUser();