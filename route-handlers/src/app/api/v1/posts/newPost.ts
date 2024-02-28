export type PostData = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
export async function newPost(data: Omit<PostData, "id">): Promise<PostData> {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((e: Error) => {
      console.error(`new post request error: ${e}`);
      return {
        status: 400,
        error: e,
      };
    });
}
