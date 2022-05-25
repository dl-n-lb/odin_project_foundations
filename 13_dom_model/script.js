const container = document.querySelector('#container');
{ // content
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "This is the glorious text-content!";

    container.appendChild(content);
}

{ // p
    const p = document.createElement('p');
    p.style.color = "red";
    p.textContent = "Hey I'm red!";

    container.appendChild(p);
}

{ // h3
    const h3 = document.createElement('h3');
    h3.style.color = "blue";
    h3.textContent = "I'm a blue h3";

    container.appendChild(h3);
}

{ // div
    const div = document.createElement('div');
    div.style.backgroundColor = "pink";
    div.style.border = "2px solid black";

    { // h1
        const h1 = document.createElement('h1');
        h1.textContent = "I'm in a div";

        div.appendChild(h1);
    }

    { // p
        const p = document.createElement('p');
        p.textContent = "ME TOO!";

        div.appendChild(p);
    }

    container.appendChild(div);
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.backgroundColor = "blue";
});