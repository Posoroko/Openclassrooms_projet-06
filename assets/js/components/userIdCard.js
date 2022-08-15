function userIdAndCard(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function userCard_article() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, userCard_article }
}

export default userIdAndCard