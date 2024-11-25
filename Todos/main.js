function PostData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
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
        <h2>${post.userId}</h2>
        <p>${post.title}</p>
        <p>${post.completed}</p>
        `;
        ShowPost.appendChild(CardData);
    });
}