const accessKey = 'T7uiTISAU8jSaBbMOgt5GKTgm2yNojQaP9DRPD3JJh4';
const count =10 ;
const index = window.location.pathname.includes('index.html');
const portfolio = window.location.pathname.includes('portfolio.html');

async function loadImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`);
        const data = await response.json();
        const imageContainer = document.getElementById('portfolio');
        const myPortfolio = document.getElementById('my-portfolio');

        const imgAtt = (img, photo)=> {
            img.src = photo.urls.regular;
            img.alt = photo.alt_description;
            img.loading = 'lazy';
        }
        // for portfolio
        if (portfolio){
            data.forEach(photo => {
                const box = document.createElement('div');
                box.className = 'box';

                const img = document.createElement('img');
                imgAtt(img, photo);
                box.appendChild(img);

                const caption = document.createElement('div');
                caption.className = 'show-caption';
                caption.textContent = 'Heloo';
                box.appendChild(caption);

                imageContainer.appendChild(box);
            });
        }
        // for index
        else if (index) {
            data.forEach(photo => {
                const figure = document.createElement('figure');

                const img = document.createElement('img');
                imgAtt(img, photo);
                figure.appendChild(img);

                myPortfolio.appendChild(figure);
            });
        } else {
            console.log('unknown');
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

window.onload = loadImages;
console.log(window.location.pathname)