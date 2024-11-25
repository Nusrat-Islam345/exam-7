function PostData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(reponse=>reponse.json())
    .then(post=>displayPost(post))   
}

PostData();

const displayPost = (data) =>{
    const ShowPost = document.getElementById("POST");

    data.forEach((post) => {
        const CardData = document.createElement("div")

            CardData.classList.add("JSON-Posts");
        CardData.innerHTML=`
        <p>${post.name}</p>
        <h3>${post.address.geo.lng}</h3>
        `;
        ShowPost.appendChild(CardData);
    });
}