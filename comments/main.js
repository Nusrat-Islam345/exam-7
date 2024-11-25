function PostData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(reponse=>reponse.json())
    .then(post=>displayPost(post))   
}

PostData();

const displayPost = (data) =>{
    const ShowPost = document.getElementById("comment");

    data.forEach((post) => {
        const CardData = document.createElement("div")

            CardData.classList.add("JSON-Posts");
        CardData.innerHTML=`
        <h2>${post.id}</h2>
        <h6>${post.email}</h6>
        <p>${post.body}</p>
        `;
        ShowPost.appendChild(CardData);
    });
}