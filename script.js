let slide_data = [
    {
        'src': 'image1.png',
        'title': 'Hi Zahratul Aya,',
        'copy': 'Thank you for being patient with me.'
    },
    {
        'src': 'image2.png',
        'title': 'I realize that my way of communication may not always be good.',
        'copy': 'I will continue to strive to improve it, and believe me, I will always be there for you.'
    },
    {
        'src': 'image3.png',
        'title': 'I want to remind you to always upgrade yourself.',
        'copy': 'Utilize your time wisely, do not waste opportunities.'
    },
    {
        'src': 'image4.png',
        'title': 'Focus on your future, as it is the key to success.',
        'copy': 'Remember, for every difficulty, there is an opportunity for growth.'
    },
];

let slides = [],
    captions = [];

let autoplay = setInterval(function () {
    nextSlide();
}, 5000);

let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
let down_button = document.getElementById('down_button');

down_button.addEventListener('click', function (e) {
    e.preventDefault();
    clearInterval(autoplay);
    nextSlide();
    autoplay;
});

for (let i = 0; i < slide_data.length; i++) {
    let slide = document.createElement('div'),
        caption = document.createElement('div'),
        slide_title = document.createElement('div');

    slide.classList.add('slide');
    slide.setAttribute('style', 'background:url(' + slide_data[i].src + ')');
    caption.classList.add('caption');
    slide_title.classList.add('caption-heading');
    slide_title.innerHTML = '<h1>' + slide_data[i].title + '</h1>';

    switch (i) {
        case 0:
            slide.classList.add('current');
            caption.classList.add('current-caption');
            break;
        case 1:
            slide.classList.add('next');
            caption.classList.add('next-caption');
            break;
        case slide_data.length - 1:
            slide.classList.add('previous');
            caption.classList.add('previous-caption');
            break;
        default:
            break;
    }
    caption.appendChild(slide_title);
    caption.insertAdjacentHTML('beforeend', '<div class="caption-subhead"><span>' + slide_data[i].copy + '</span></div>');
    slides.push(slide);
    captions.push(caption);
    leftSlider.appendChild(slide);
    container.appendChild(caption);
}

function nextSlide() {
    slides[0].classList.remove('current');
    slides[0].classList.add('previous', 'change');
    slides[1].classList.remove('next');
    slides[1].classList.add('current');
    slides[2].classList.add('next');
    let last = slides.length - 1;
    slides[last].classList.remove('previous');

    captions[0].classList.remove('current-caption');
    captions[0].classList.add('previous-caption', 'change');
    captions[1].classList.remove('next-caption');
    captions[1].classList.add('current-caption');
    captions[2].classList.add('next-caption');
    let last_caption = captions.length - 1;

    captions[last].classList.remove('previous-caption');

    let placeholder = slides.shift();
    let captions_placeholder = captions.shift();
    slides.push(placeholder);
    captions.push(captions_placeholder);
}
