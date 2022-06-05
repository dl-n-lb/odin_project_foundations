class Book
{ 
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function addBookToLibrary(book) {
    let container = document.getElementById('container');
    let card = document.createElement('div');
    card.classList.add("card");
    card.classList.add(book.read ? "read" : "unread");
    
    let card_title = document.createElement('h1');
    card_title.textContent = book.title;
    card.appendChild(card_title);
    
    let card_author = document.createElement('h2');
    card_author.textContent = book.author;
    card.appendChild(card_author);

    let card_pages = document.createElement('p');
    card_pages.textContent = book.pages;
    card.appendChild(card_pages);

    container.appendChild(card);
}


for (let i = 0; i < 40; ++i) {
    addBookToLibrary(new Book("a", "b", 12, false));
}