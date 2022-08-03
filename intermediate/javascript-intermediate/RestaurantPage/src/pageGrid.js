
function pageLoad(doc) { //accept document as argument
    console.log(3);
    let mainBody = doc.querySelector("#content");

    let header = doc.createElement("div");
    header.setAttribute("id", "header");
    let description = doc.createElement("ul");

    let menu = doc.createElement("li");
    let location = doc.createElement("li");
    location.textContent = "location"
    let events = doc.createElement("li");
    let aboutUS = doc.createElement("li");

    description.appendChild(menu);
    description.appendChild(location);
    description.appendChild(events);
    description.appendChild(aboutUS);
    header.appendChild(description);

    console.log(header);

    let LSBar = doc.createElement("div");
    LSBar.setAttribute("id", "sidebar");


    let contentBox = doc.createElement("div");
    contentBox.setAttribute("id", "contentBox");


    
    mainBody.appendChild(header);
    mainBody.appendChild(LSBar);
    mainBody.appendChild(contentBox);
}

export default pageLoad;