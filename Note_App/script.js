const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

const getNotesFromStorage = () => {
  try {
    return localStorage.getItem("notes") || "";
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "";
  }
};

const updateStorage = () => {
  try {
    localStorage.setItem("notes", notesContainer.innerHTML);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const showNotes = () => {
  const savedNotes = getNotesFromStorage();
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
    notes = document.querySelectorAll(".input-box");
    attachNoteListeners();
  }
};

const createNote = () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  img.alt = "Delete note";
  img.title = "Delete note";
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);
  attachNoteListeners();
  updateStorage();
};

const attachNoteListeners = () => {
  notes = document.querySelectorAll(".input-box");
  notes.forEach((note) => {
    note.addEventListener("input", () => {
      updateStorage();
    });
  });
};

createBtn.addEventListener("click", createNote);

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

showNotes();
