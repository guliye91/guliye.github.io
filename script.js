const projects = [
    {   id: 1,
        title:'menu project',
        category: 'javascript',
        img: './images/menu.PNG',
        info: 'This is a project that displays different menu items and their prices in a restaurant. The project was built using Javascript to perform most of the functionalities.'
    },
    {   id: 2,
        title:'navbar project',
        category: 'html',
        img: './images/navbar.PNG',
        info: 'This is a project that shows full responsive navigation bar. The project was designed using HTML5 & CSS3 in its UI.'
    },
    {   id: 3,
        title:'questions project',
        category: 'javascript',
        img: './images/questions.PNG',
        info: 'This is a Javascript project that displays different answers when the user clicks their favorite question.'
    },
    {   id: 4,
        title:'reviews project',
        category: 'html',
        img: './images/reviews.PNG',
        info: 'This is a review project that was designed using HTML5 & CSS3. It uses JS in most of its functionalities. It also contains slides that further enhances User Experience'
    }
];

const showcaseProjects = document.querySelector('.showcase-projects');
const filterBtns = document.querySelectorAll('.filter-btn');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.main-links');
const links = menu.querySelectorAll('a');
const form = document.querySelector('form');
const name= form.querySelector('#name');
const email= form.querySelector('#email');
const message = form.querySelector('#message');
const msgAlert = document.querySelector('.alert');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(name.value === "" || email.value === "" || message.value ===""){
        msgAlert.innerHTML = 'Please fill al the fields!';
        msgAlert.style.color = 'red';
        setTimeout(()=>{
            msgAlert.remove();
        }, 1000)
    }else{
        const nameValue = name.value;
        alert('HI, '+nameValue +" Thank you for contacting")
        name.value ="";
        email.value = '';
        message.value = '';
    }
})

burger.addEventListener('click', ()=>{
    menu.classList.toggle('show-main-links');
    links.forEach((link)=>{
        link.addEventListener('click', ()=>{
            menu.classList.remove('show-main-links');
        })
    })
})

window.addEventListener('DOMContentLoaded', ()=>{
   displayProjects(projects);
})
filterBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        const category = e.currentTarget.dataset.id;
        const categoryItems = projects.filter((item)=>{
            if(item.category === category){
                return item;
            }
        })
        if(category === 'all'){
            displayProjects(projects);
        }else{
            displayProjects(categoryItems)
        }
    })
})
function displayProjects(projects){
    let showProjects = projects.map((project)=>{
        return `<article>
        <div class="project-image">
            <img src= ${project.img} alt= ${project.title}>
        </div>
        <div class="project-content">
            <h2 class="title">${project.title}</h2>
            <p class="info">${project.info}</p>
        </div>
    </article>`;
    })
    showProjects = showProjects.join('');
   showcaseProjects.innerHTML = showProjects

}
