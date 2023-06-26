const hi = ["Hello,", "Hi,", "Greetings"];
const verb = ["are", "will", "were", "are going to"];
const adj = ["successful", "strong", "praised", "mindful", "smart", "stupid"];
const bye = ["Have a bad day!", "Have a good day!", "Goodbye!"];

function doIt(){
    const name = document.getElementById("name").value;
    const first = hi[Math.floor(Math.random() * hi.length)];
    const second = verb[Math.floor(Math.random() * verb.length)];
    let third = "";
    if (second === "are" || second === "were") {
        third = adj[Math.floor(Math.random() * adj.length)];
    }else {
        third = "be " + adj[Math.floor(Math.random() * adj.length)];
    }
    const fourth = bye[Math.floor(Math.random() * bye.length)];
    const sentence = first + " " + name + "<br>" + "You " + second + " " + third + "<br>" + fourth;
    document.getElementById('text').innerHTML = sentence;
    document.getElementById('text').style.color = 'green';
    document.getElementById('text').style.textAlign = 'center';
    document.getElementById('name').style.display = 'none';
    document.getElementById('label').style.display = 'none';
    document.getElementById('button').style.display = 'none';
}