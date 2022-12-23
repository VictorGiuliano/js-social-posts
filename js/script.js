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
const post = [
    { 
        idPost:1, 
        userName: 'Bruno Barbieri',
        iconUser: 'Post-meta-icon',  
        date:'12/17/2019',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://unsplash.it/300/300?image=3',
        like: 180,
    },
    { 
        idPost:2, 
        userName: 'Mirko Beni',
        iconUser: 'Post-meta-icon',  
        date:'07/05/2016',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://unsplash.it/300/300?image=3',
        like: 320,
    },
    { 
        idPost:3, 
        userName: 'Ciro Esposito',
        iconUser: 'Post-meta-icon',  
        date:'10/26/2020',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://unsplash.it/300/300?image=3',
        like: 60,
    },
    { 
        idPost:4, 
        userName: 'Matteo Don',
        iconUser: 'Post-meta-icon',  
        date:'04/20/2002',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://unsplash.it/300/300?image=3',
        like: 12,
    },
    { 
        idPost:5, 
        userName: 'Dario Moccia',
        iconUser: 'Post-meta-icon',  
        date:'06/08/2012',
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed repellat nam provident? Fuga voluptatem dolorem quidem hic reprehenderit nulla provident laborum illo, officiis beatae fugiat suscipit eligendi quos error recusandae?",
        img: 'https://unsplash.it/300/300?image=3',
        like: 420,
    },
    ];