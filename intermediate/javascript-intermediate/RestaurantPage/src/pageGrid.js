
function pageLoad() { //accept documentument as argument
    let mainBody = document.querySelector("#content");


    let header = document.createElement("div");
    header.setAttribute("id", "header");
    let description = document.createElement("ul");

    let menu = document.createElement("li");
    let location = document.createElement("li");
    location.textContent = "location"
    let events = document.createElement("li");
    let aboutUS = document.createElement("li");

    description.appendChild(location);
    description.appendChild(events);
    description.appendChild(aboutUS);


    let LSBar = document.createElement("div");
    header.setAttribute("id", "sidebar");


    let contentBox = document.createElement("div");
    header.setAttribute("id", "contentBox");


    mainBody.appendChild(header);
    mainBody.appendChild(LSBar);
    mainBody.appendChild(contentBox);
}

export default pageLoad;