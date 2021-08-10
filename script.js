const tagsEl = document.querySelector('#tags');
const textAreaEl = document.querySelector('#textarea');
textAreaEl.focus();

const randomSelect = () => {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}

const pickRandomTag = () => {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

const highlightTag = (tag) => {
    tag.classList.add('highlight');
}

const unHighlightTag = (tag) => {
    tag.classList.remove('highlight');
}

const createTag = (input) => {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        let tagEl = document.createElement('span');
        tagEl.innerText = tag;
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
    })
};

textAreaEl.addEventListener('keyup', (e) => {
    createTag(e.target.value);
    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();
    }
});