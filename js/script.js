/*# Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes 
relativo.
# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

//Milestone 1: CREAZIONE ARRAY OGGETTI
const userPost = [
    { 
        idPost:1, 
        userName: 'Bruno Barbieri',
        iconUser: 'https://th.bing.com/th/id/R.653f93c3cb58cb7f21b6a721ebdbec19?rik=wJggWmq6sjoy5w&riu=http%3a%2f%2fwww.4x4.ec%2foverlandecuador%2fwp-content%2fuploads%2f2017%2f06%2fdefault-user-icon-8.jpg&ehk=9fyAmt1RIymhvMctzqJXJMDodZfLHOkhYLUAIoBLYfs%3d&risl=&pid=ImgRaw&r=0',  
        date:'12/17/2019',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80',
        like: 180,
    },
    { 
        idPost:2, 
        userName: 'Mirko Martorana',
        iconUser: 'https://images.unsplash.com/photo-1621535484902-f946de404eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',  
        date:'07/05/2016',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://images.unsplash.com/photo-1609102026400-3c0ca378e4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80',
        like: 320,
    },
    { 
        idPost:3, 
        userName: 'Ciro Esposito',
        iconUser: 'https://images.unsplash.com/photo-1602612096446-481372b1262a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',  
        date:'10/26/2020',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: '',
        like: 60,
    },
    { 
        idPost:4, 
        userName: 'Matteo Don',
        iconUser: 'https://th.bing.com/th/id/R.653f93c3cb58cb7f21b6a721ebdbec19?rik=wJggWmq6sjoy5w&riu=http%3a%2f%2fwww.4x4.ec%2foverlandecuador%2fwp-content%2fuploads%2f2017%2f06%2fdefault-user-icon-8.jpg&ehk=9fyAmt1RIymhvMctzqJXJMDodZfLHOkhYLUAIoBLYfs%3d&risl=&pid=ImgRaw&r=0',  
        date:'04/20/2002',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://th.bing.com/th/id/R.5839a25e55744eb3c51771c354ba8e1a?rik=1yrF2k%2biaGxGCQ&pid=ImgRaw&r=0',
        like: 12,
    },
    { 
        idPost:5, 
        userName: 'Dario Moccia',
        iconUser: 'https://fortskins.org/wp-content/uploads/2020/07/Typical-Gamer-fortnite-player.jpg',  
        date:'06/08/2012',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://1.bp.blogspot.com/-KUUkOZ25FQI/W3QcEKXzLcI/AAAAAAAADAM/sMIP7wO48oU6Du92N9lVQCFdCYyE9avTgCLcBGAs/s1600/cover-auto-twitch-recording.png',
        like: 420,
    },
    ];

// OPERAZIONI INIZIALI
const desk = document.getElementById('container');

//Creazione del post tramite Js
let post = '';

for(let i=0; i<userPost.length;i++){
    post += `
    <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src= "${userPost[i].iconUser}" alt="${userPost[i].userName}" />
                </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${userPost[i].userName}</div>
              <div class="post-meta__time">${userPost[i].date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
        ${userPost[i].text}
        </div>
        <div class="post__image">
          <img src="${userPost[i].img}" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" data-postid="1">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${userPost[i].like}</b> persone</div>
          </div>
        </div>
      </div>`
};

desk.innerHTML = post;