import { Post } from "../models/Post";

let addPostButton = document.getElementById(
  "addPostButton"
) as HTMLButtonElement | null;
const titleInput = document.getElementById(
  "titleInput"
) as HTMLInputElement | null;
const descInput = document.getElementById(
  "descInput"
) as HTMLInputElement | null;
const categoryInput = document.getElementById(
  "categoryInput"
) as HTMLInputElement | null;

let postList: Post[] = [];

export function createObject() {
  addPostButton?.addEventListener("click", (e) => {
    e.preventDefault();
    if (!titleInput || titleInput.value === "") {
      alert("Fill out the title");
    }
    if (!descInput || descInput.value === "") {
      alert("Fill out the description");
    }
    if (!categoryInput || categoryInput.value === "") {
      alert("Fill out the category");
    } else {
      const newPost: Post = new Post(
        titleInput!.value,
        descInput!.value,
        categoryInput!.value
      );
      postList.push(newPost);
    }
    console.log(postList);
  });
}
