function PhotoData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(reponse=>reponse.json())
    .then(post=>displayPost(post))   
}

PhotoData();

const displayPost = (data) =>{
    const ShowPost = document.getElementById("photo");

    data.forEach((post) => {
        const CardData = document.createElement("div")

            CardData.classList.add("JSON-Posts");
        CardData.innerHTML=`

    <div class="card" style="width: 18rem;">
        <img src="image/WhatsApp Image 2024-09-24 at 16.26.36_c1a4a65f.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${post.id}</h4>
            <p class="card-text">${post.url}</p>
            <a href="#" class="btn btn-primary">${post.title}</a>
        </div>
    </div>
        `;
        ShowPost.appendChild(CardData);
    });
}