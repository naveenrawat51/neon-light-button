const allBtn = Array.from(document.querySelectorAll('.neon-btn'));

for (let i = 0; i < allBtn.length; i++) {
    const span1 = document.createElement('span');

    for( let j = 0; j < 4; j++) {
        allBtn[i].appendChild(span1);
    }
}