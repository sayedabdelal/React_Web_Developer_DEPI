const ContainerQuates = document.getElementById('box-quates');

const massage = [
    {quate: "You miss 100% of the shots you don't take.", speaker: "Wayne Gretzy"},
    {quate: "Do not take life too seriously. You will not get out alive", speaker: "Elbert Hubbard"},
    {quate: "It's not what happens to you, but how you react to it that matters.", speaker: "Epictetus"},
    {quate: "The best revenge is massive success.", speaker: "--Frank Sinatra"},
    {quate: "Resentment is like drinking poison and waiting for your enemies to die.", speaker: "Nelson Mandela"},
]

function getRandomQuate() {
    return massage[Math.floor(Math.random() * massage.length)];
}



function generateQuote() { 
    const { quate, speaker } = getRandomQuate();
    ContainerQuates.innerHTML = `
    <div class="quate">
        <p>"${quate}"</p>
        <p class="speaker">-- ${speaker}</p>
    </div>
    `

}




