function AlbumData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(reponse=>reponse.json())
    .then(post=>displayPost(post))   
}

AlbumData();

const displayPost = (albums) =>{
    const ShowAlbum = document.getElementById("album");

    albums.forEach((post) => {
        const CardData = document.createElement("div");

            CardData.classList.add("JSON-Albums");
        CardData.innerHTML=`
        <h3>${post.id}</h3>
        <h5>${post.title}</h5>
        `;
        ShowAlbum.appendChild(CardData);
    });
}