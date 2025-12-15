const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('profile-container');
const searchBox = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

const getUser = async (username) => {
  try {
    const response = await fetch(APIURL + username);
    const data = await response.json();

    if (response.ok) {
      createUserCard(data);
      getRepos(username);
    } else {
      main.innerHTML = `<p class="error">User not found. Try again.</p>`;
    }
  } catch (error) {
    main.innerHTML = `<p class="error">Something went wrong. Check connection.</p>`;
  }
};

const getRepos = async (username) => {
  const reposResponse = await fetch(APIURL + username + '/repos?sort=created');
  const reposData = await reposResponse.json();
  addReposToCard(reposData);
};

const createUserCard = (user) => {
  const cardHTML = `
    <div class="profile-card">
      <div class="profile-header">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        <div class="profile-info">
          <h2 class="name">${user.name || user.login}</h2>
          <p class="username">@${user.login}</p>
          <p class="bio">${user.bio || 'No bio available'}</p>
          <p class="location"><i class="fas fa-map-marker-alt"></i> ${user.location || 'No location'}</p>
        </div>
      </div>

      <div class="profile-stats">
        <div class="stat">
          <span class="stat-number">${user.followers.toLocaleString()}</span>
          <span class="stat-label">Followers</span>
        </div>
        <div class="stat">
          <span class="stat-number">${user.following.toLocaleString()}</span>
          <span class="stat-label">Following</span>
        </div>
        <div class="stat">
          <span class="stat-number">${user.public_repos}</span>
          <span class="stat-label">Repos</span>
        </div>
      </div>

      <div class="repos">
        <h3>Top Repos</h3>
        <div class="repo-list" id="repos"></div>
      </div>
    </div>
  `;

  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById('repos');
  reposEl.innerHTML = ''; // clear

  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('div');
    repoEl.classList.add('repo');

    repoEl.innerHTML = `
      <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.name}</a>
      <p class="repo-desc">${repo.description || 'No description'}</p>
    `;

    reposEl.appendChild(repoEl);
  });
};

// Search on button click
searchBtn.addEventListener('click', () => {
  const user = searchBox.value.trim();
  if (user) {
    getUser(user);
    searchBox.value = '';
  }
});

// Search on Enter key
searchBox.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchBtn.click();
  }
});

// Load default user (octocat) on page load
getUser('octocat');