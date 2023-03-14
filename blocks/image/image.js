/*
*    Image Block
*    Adds image using supplied url
*/

export default async function decorate(block) {
    const link = block.querySelector('a');
    const path = link ? link.getAttribute('href') : block.textContent.trim();
    const img = document.createElement('img');
    img.setAttribute('src',path)
    block.textContent = '';
    block.append(img);
}