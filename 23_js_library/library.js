class Book
{ 
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function makeMarkAsReadButton(button) {
    button.addEventListener('click', (e) => {
        let card = e.target.parentElement.parentElement;
        if (card.classList.contains("read")) {
            e.target.classList.remove("mark-as-unread-button");
            e.target.classList.add("mark-as-read-button")
            card.classList.remove("read");
            card.classList.add("unread");
        } else {
            e.target.classList.add("mark-as-unread-button");
            e.target.classList.remove("mark-as-read-button")
            card.classList.add("read");
            card.classList.remove("unread");
        }
    });
}

function makeRemoveButton(button) {
    button.addEventListener('click', (e) => {
        let card = e.target.parentElement.parentElement;
        card.remove();
    });
}

function addBookToLibrary(book) {
    let container = document.getElementById('container');
    let card = document.createElement('div');
    card.classList.add("card");
    card.classList.add(book.read ? "read" : "unread");
    
    let text_div = document.createElement('div');
    {
        let card_title = document.createElement('h1');
        card_title.textContent = book.title;
        text_div.appendChild(card_title);
        
        let card_author = document.createElement('h2');
        card_author.textContent = book.author;
        text_div.appendChild(card_author);

        let card_pages = document.createElement('p');
        card_pages.textContent = book.pages;
        text_div.appendChild(card_pages);
    }
    card.appendChild(text_div);
    let buttons = document.createElement('div');
    buttons.classList.add('button-container');
    {
        let mark_as_read = document.createElement('img');
        mark_as_read.classList.add("mark-as-read-button");
        mark_as_read.src = "https://www.freeiconspng.com/thumbs/checkmark-png/black-checkmark-png-4.png";
        makeMarkAsReadButton(mark_as_read);
        buttons.appendChild(mark_as_read);

        let remove_card = document.createElement('img');
        remove_card.classList.add("remove-card-button");
        remove_card.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Saint_Andrew%27s_cross_black.svg/1200px-Saint_Andrew%27s_cross_black.svg.png";
        makeRemoveButton(remove_card);
        buttons.appendChild(remove_card);
    }
    card.appendChild(buttons);

    container.appendChild(card);
}

function addFormCoverHide() {
    let button = document.getElementById('add-book');
    button.addEventListener('click', (e) => {
        let form = e.target.parentElement;
        form.classList.add('hide-cover');
    });
}

for (let i = 0; i < 4; ++i) {
    addBookToLibrary(new Book("Harry Potter " + (i+1), "J.K.Rowling", 200, false));
}

addFormCoverHide();