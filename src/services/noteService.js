import axios from "axios";
const baseUrl = "https://notes-api-t91y.onrender.com/api/notes";

function getNotes() {
  return axios.get(baseUrl);
}

function createNote(newNote) {
  return axios.post(baseUrl, newNote);
}

function updateNote(id, newNote) {
  return axios.put(`${baseUrl}/${id}`, newNote);
}

function deleteNote(id) {
  return axios.delete(`${baseUrl}/${id}`);
}

export default {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
