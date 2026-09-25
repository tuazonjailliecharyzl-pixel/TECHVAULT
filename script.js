/* =========================
SAMPLE PROTOTYPE DATA
========================= */

let prototypes = [

{
    id: 1,
    name: "FM Transmitter",
    course: "COMMS 1",
    description:
        "A prototype that demonstrates the transmission of audio signals using frequency modulation.",
    purpose:
        "To demonstrate the basic principle of FM communication.",
    components:
        "Transistor, resistors, capacitors, antenna",
    members:
        "Member 1, Member 2"
},

{
    id: 2,
    name: "Digital Communication System",
    course: "COMMS 1",
    description:
        "A prototype demonstrating the transmission of digital information.",
    purpose:
        "To demonstrate basic digital communication concepts.",
    components:
        "Arduino, LEDs, switches, resistors",
    members:
        "Member 1, Member 2, Member 3"
},

{
    id: 3,
    name: "Automatic Lighting System",
    course: "ELEC 1",
    description:
        "An automatic lighting system that controls a light based on sensor input.",
    purpose:
        "To demonstrate automatic control of electrical loads.",
    components:
        "LDR, transistor, LED, resistors",
    members:
        "Member 1, Member 2"
},

{
    id: 4,
    name: "Smart Irrigation System",
    course: "ELEC 2",
    description:
        "A smart irrigation system that controls water distribution based on soil conditions.",
    purpose:
        "To provide controlled irrigation for plants.",
    components:
        "Arduino, soil moisture sensor, pump, valves",
    members:
        "Member 1, Member 2, Member 3, Member 4"
}

];



/* =========================
ENTER DASHBOARD
========================= */

function enterDashboard() {

document.getElementById("welcome").style.display = "none";

document.querySelector(".sidebar").style.display = "block";

document.querySelector(".dashboard").style.display = "block";

showHome();

}



/* =========================
HIDE ALL SECTIONS
========================= */

function hideSections() {

document.getElementById("home").style.display = "none";

document.getElementById("addPrototype").style.display = "none";

document.getElementById("categories").style.display = "none";

document.getElementById("about").style.display = "none";

}



/* =========================
HOME
========================= */

function showHome() {

hideSections();

document.getElementById("home").style.display = "block";

displayPrototypes(prototypes);

}



/* =========================
ADD PROTOTYPE
========================= */

function showAdd() {

hideSections();

document.getElementById("addPrototype").style.display = "block";

}



/* =========================
CATEGORIES
========================= */

function showCategories() {

hideSections();

document.getElementById("categories").style.display = "block";

}



/* =========================
ABOUT
========================= */

function showAbout() {

hideSections();

document.getElementById("about").style.display = "block";

}



/* =========================
SEARCH PROTOTYPES
========================= */

function searchPrototypes() {

const searchInput =
    document.getElementById("searchBar").value
    .toLowerCase()
    .trim();

const filteredPrototypes =
    prototypes.filter(function(prototype) {

        return (

            prototype.name
                .toLowerCase()
                .includes(searchInput)

            ||

            prototype.course
                .toLowerCase()
                .includes(searchInput)

        );

    });

displayPrototypes(filteredPrototypes);

const title =
    document.getElementById("searchResultTitle");

if (searchInput === "") {

    title.innerText = "All Prototypes";

}

else {

    title.innerText =
        "Search Results for: " + searchInput;

}

}



/* =========================
DISPLAY PROTOTYPES
========================= */

function displayPrototypes(list) {

const tableBody =
    document.getElementById("prototypeTableBody");

const table =
    document.getElementById("prototypeTable");

const noMessage =
    document.getElementById("noPrototypeMessage");

tableBody.innerHTML = "";

if (list.length === 0) {

    table.style.display = "none";

    noMessage.style.display = "block";

    return;

}

table.style.display = "table";

noMessage.style.display = "none";

list.forEach(function(prototype) {

    const row =
        document.createElement("tr");

    row.innerHTML = `

        <td>
            ${prototype.name}
        </td>

        <td>
            ${prototype.course}
        </td>

        <td>

            <button
                type="button"
                onclick="viewPrototype(${prototype.id})"
            >
                VIEW
            </button>

            <button
                type="button"
                onclick="editPrototype(${prototype.id})"
            >
                EDIT
            </button>

            <button
                type="button"
                onclick="deletePrototype(${prototype.id})"
            >
                DELETE
            </button>

        </td>

    `;

    tableBody.appendChild(row);

});

}



/* =========================
SHOW CATEGORY
========================= */

function showCategory(category) {

hideSections();

document.getElementById("categories").style.display = "block";

document.getElementById("categoryTitle").innerText =
    category + " Prototypes";

const categoryTableBody =
    document.getElementById("categoryTableBody");

const table =
    document.getElementById("categoryTable");

const noMessage =
    document.getElementById("noCategoryPrototype");

categoryTableBody.innerHTML = "";

const categoryPrototypes =
    prototypes.filter(function(prototype) {

        return prototype.course === category;

    });

if (categoryPrototypes.length === 0) {

    table.style.display = "none";

    noMessage.style.display = "block";

    return;

}

table.style.display = "table";

noMessage.style.display = "none";

categoryPrototypes.forEach(function(prototype) {

    const row =
        document.createElement("tr");

    row.innerHTML = `

        <td>
            ${prototype.name}
        </td>

        <td>

            <button
                type="button"
                onclick="viewPrototype(${prototype.id})"
            >
                VIEW
            </button>

            <button
                type="button"
                onclick="editPrototype(${prototype.id})"
            >
                EDIT
            </button>

            <button
                type="button"
                onclick="deletePrototype(${prototype.id})"
            >
                DELETE
            </button>

        </td>

    `;

    categoryTableBody.appendChild(row);

});

}



/* =========================
VIEW PROTOTYPE
========================= */

function viewPrototype(id) {

const prototype =
    prototypes.find(function(item) {

        return item.id === id;

    });

if (!prototype) {

    return;

}

alert(

    "Prototype: " + prototype.name +

    "\n\nCourse: " + prototype.course +

    "\n\nDescription: " + prototype.description +

    "\n\nPurpose: " + prototype.purpose +

    "\n\nComponents: " + prototype.components +

    "\n\nMembers: " + prototype.members

);

}



/* =========================
EDIT PROTOTYPE
========================= */

function editPrototype(id) {

const prototype =
    prototypes.find(function(item) {

        return item.id === id;

    });

if (!prototype) {

    return;

}

alert(

    "Edit function for \"" +
    prototype.name +
    "\" will be connected to Firebase later."

);

}



/* =========================
DELETE PROTOTYPE
========================= */

function deletePrototype(id) {

const prototype =
    prototypes.find(function(item) {

        return item.id === id;

    });

if (!prototype) {

    return;

}

const confirmDelete =
    confirm(

        "Are you sure you want to delete \"" +
        prototype.name +
        "\"?"

    );

if (confirmDelete) {

    prototypes =
        prototypes.filter(function(item) {

            return item.id !== id;

        });

    displayPrototypes(prototypes);

    alert(
        "Prototype deleted successfully."
    );

}

}



/* =========================
INITIAL DISPLAY
========================= */

document.addEventListener()
"DOMContentLoaded",
function() {

    document.querySelector(".sidebar").style.display = "none";

    document.querySelector(".dashboard").style.display = "none";

    document.getElementById("home").style.display = "none";

    document.getElementById("addPrototype").style.display = "none";

    document.getElementById("categories").style.display = "none";

    document.getElementById("about").style.display = "none";

}
