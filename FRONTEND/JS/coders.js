let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


function showContent(type) {
    // Hide all sections first
    document.querySelector('.html').style.display = 'none';
    document.querySelector('.css').style.display = 'none';
    document.querySelector('.js').style.display = 'none';
  
    // Remove HTML content if it's dynamically created
    if (type !== 'html') {
      const htmlContainer = document.querySelector('.html');
      while (htmlContainer.firstChild) {
        htmlContainer.removeChild(htmlContainer.firstChild);
      }
    }
  
    // Show the selected content
    if (type === 'html') {
      const htmlContainer = document.querySelector('.html');
      htmlContainer.style.display = 'block';
  
      // Create the HTML content dynamically
      const content = document.createElement('div');
      content.classList.add('editor-content');
      content.innerHTML = `
        <code class="code">
          <p><span class="color-0">&lt;!DOCTYPE html&gt;</span></p>
          <p><span class="color-0">&lt;html&gt;</span></p>
          <p class="property"><span class="color-0">&lt;head&gt;</span></p>
          <p class="property"><span class="color-0">&lt;title&gt;</span><span class="color-1">Coder's Guild</span><span class="color-0">&lt;/title&gt;</span></p>
          <p class="property"><span class="color-0">&lt;/head&gt;</span></p>
          <p class="property"><span class="color-0">&lt;body&gt;</span></p>
          <p class="property"><span class="color-0">&lt;h1&gt;</span><span class="color-1">Welcome to the Coder's Guild!</span><span class="color-0">&lt;/h1&gt;</span></p>
          <p class="property"><span class="color-0">&lt;p&gt;</span><span class="color-1">A specialized University club for technology enthusiasts.</span><span class="color-0">&lt;/p&gt;</span></p>
          <p class="property"><span class="color-0">&lt;ul&gt;</span></p>
          <p class="property"><span class="color-0">&lt;li&gt;</span><span class="color-1">Workshops and seminars on cutting-edge technologies.</span><span class="color-0">&lt;/li&gt;</span></p>
          <p class="property"><span class="color-0">&lt;li&gt;</span><span class="color-1">Networking with industry professionals and like-minded peers.</span><span class="color-0">&lt;/li&gt;</span></p>
          <p class="property"><span class="color-0">&lt;li&gt;</span><span class="color-1">Hands-on projects to build real-world experience.</span><span class="color-0">&lt;/li&gt;</span></p>
          <p class="property"><span class="color-0">&lt;li&gt;</span><span class="color-1">Hackathons and competitions to challenge your skills.</span><span class="color-0">&lt;/li&gt;</span></p>
          <p class="property"><span class="color-0">&lt;/ul&gt;</span></p>
          <p class="property"><span class="color-0">&lt;/body&gt;</span></p>
          <p><span class="color-0">&lt;/html&gt;</span></p>
        </code>
      `;
      htmlContainer.appendChild(content);
  
    } else if (type === 'css') {
      document.querySelector('.css').style.display = 'block';
    } else if (type === 'js') {
      document.querySelector('.js').style.display = 'block';
    }
  }
  



const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}


//BKG CAROSEL OF THE MAIN TRAVEL 
document.addEventListener('DOMContentLoaded', function () {
  let slides = document.querySelectorAll('.slides.fade');
  let slide_index = 0;

  function show_slides() {
      slides.forEach(function(slide) {
          slide.classList.remove('active');
      });

      slide_index++;
      if (slide_index >= slides.length) {
          slide_index = 0;
      }

      slides[slide_index].classList.add('active');
  }
  show_slides();
  setInterval(show_slides, 5000); 
});  


const buttons = document.querySelectorAll('#scroll-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        document.getElementById('join-now').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
