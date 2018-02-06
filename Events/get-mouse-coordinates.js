function showCoordinates(e) {
    console.log(`
        Screen X: ${e.screenX}\n
        Screen Y: ${e.screenY}\n
        Browser X: ${e.clientX}\n
        Browser Y: ${e.clientY}\n
        Document X: ${e.pageX}\n
        Document Y: ${e.pageY}
    }`);
}

document.addEventListener('click', showCoordinates);

// See example at https://codepen.io/digilou/pen/eVzKzw