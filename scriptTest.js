const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
 
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


let MyNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < MyNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    MyNodelist[i].appendChild(span);

    let span1 = document.createElement("span");
    let txt1 = document.createTextNode("edit");
    span1.className = "edit";
    span1.appendChild(txt1);
    MyNodelist[i].appendChild(span1);
}

let close = document.getElementsByClassName("close");
for (let y = 0; y < close.length; y++) {
    close[y].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

let edit = document.getElementsByClassName("edit");
for (let y = 0; y < edit.length; y++) {
    edit[y].onclick = function () {
        if (document.getElementById("input").value == 0) {
            let cont = this.parentElement;
            let cont2 = cont.querySelector(".tx");
            console.log(cont2);
            let cont3 = cont2.firstChild.data;
            console.log(cont3);
            document.getElementById("input").value = cont3;
            let div = this.parentElement;
            div.style.display = "none";
        } else {
            alert("Tu dois d'abord valider ta tâche !")
        }
    }
}


function addtask() {
    let li = document.createElement("li");
    let p = document.createElement("p");
    p.className = "tx";
    let taskinput = document.getElementById("input").value;
    let t = document.createTextNode(taskinput);
    li.appendChild(p);
    p.appendChild(t);
    if (taskinput === '') {
        alert('Ecris quelque chose !')
    } else {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("input").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    let span1 = document.createElement("span");
    let txt1 = document.createTextNode("edit");
    span1.className = "edit";
    span1.appendChild(txt1);
    MyNodelist[i].appendChild(span1);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    let edit = document.getElementsByClassName("edit");
    for (let y = 0; y < edit.length; y++) {
        edit[y].onclick = function () {
            if (document.getElementById("input").value == 0) {
                var cont = this.parentElement;
                var cont2 = cont.querySelector(".tx");
                console.log(cont2);
                var cont3 = cont2.firstChild.data;
                console.log(cont3);
                document.getElementById("input").value = cont3;
                var div = this.parentElement;
                div.style.display = "none";
            } else {
                alert("Tu dois d'abord valider ta tâche !")
            }
        }
    }
}


