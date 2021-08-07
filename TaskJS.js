let bar = document.getElementById("text");
let submit = document.getElementById("submit");
let list = document.getElementById("list");
 
submit.onclick = function() {
    if(bar.value.length > 0){
        let div = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add('checkbox-size');
        let label = document.createElement("label");
        label.textContent = bar.value;
        label.classList.add('label-size')
        list.appendChild(div);
        div.appendChild(checkbox);
        div.appendChild(label);
    }
}