export async function getPosts() {
  return await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10",
  )
    .then((response) => response.json())
    .catch((e: Error) => e.message);
}
