/*
*    Image Block
*    Adds image using supplied url
*/

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();
    const alt = block.querySelector('h3');
    const title = block.querySelector('h2');
    const img = document.createElement('img');
    img.setAttribute('src',path)
    img.setAttribute('alt',alt.textContent);
    block.textContent = '';
    block.append(img);
    block.append(title);
}