 axios
  .get("https://api.github.com/users/Aliszl")
  .then(response => {
    let newCard = document.querySelector(".cards");
    newCard.append(createCard(response));
  })
  .catch(error => {
    console.log(error);
  });

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"];
followersArray.forEach((follower)=>{
  console.log(follower);
  axios
  .get(`https://api.github.com/users/${follower}`)
  .then(response => {
    console.log(response);
    console.log(response.data);
    let newCard = document.querySelector(".cards");
    newCard.prepend(createCard(response));
  })
  .catch(error => {
    console.log(error);
  });
})
axios
  .get("https://api.github.com/users/Aliszl/followers")
  .then(response => {
    console.log(response);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
// Step 3: Create a function that accepts a single object as its only argument,
//    Using DOM methods and properties, create a component that will return the following DOM element:
{
  /* <div class="card">
      <img src={image url of user} />
      <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
      </div>
    </div> */
}
function createCard(obj) {
  //HTML
  const card = document.createElement("div");

  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const gitHubLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
  //Class Names
  card.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");
  //Content
  name.textContent = obj.data.name;
  img.src = obj.data.avatar_url;
  userName.textContent = `username:  ${obj.data.login}`;
  location.textContent = `Location: ${obj.data.location}`;
  profile.textContent = `Profile: `;
  gitHubLink.setAttribute("href", obj.data.html_url);
  gitHubLink.textContent = obj.data.html_url;
  followers.textContent = `Followers ${obj.data.followers}`;
  following.textContent = `Following ${obj.data.following}`;
  bio.textContent = `Bio: ${obj.data.bio}`;
  //HTML structure
  card.append(img);
  card.append(info);

  info.append(name);
  info.append(userName);
  info.append(location);
  info.append(profile);
  info.append(followers);
  info.append(following);
  info.append(bio);

  profile.append(gitHubLink);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
