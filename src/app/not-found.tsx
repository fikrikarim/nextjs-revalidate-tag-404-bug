import { CACHE_TAG } from "@/cache-tag";

import { revalidateUsingPath, revalidateUsingTag } from "@/revalidate";

export default async function NotFound() {
  await fetch("https://pokeapi.co/api/v2/pokemon", {
    next: { tags: [CACHE_TAG] },
  }).then((r) => r.json());

  const date = new Date();
  const dateString = date.toLocaleString();

  return (
    <div>
      <h1 className="text-lg">Not Found page</h1>
      <p>Date: {dateString}</p>

      <button onClick={revalidateUsingTag}>
        Revalidate using revalidateTag
      </button>

      <br />
      <br />

      <button onClick={revalidateUsingPath}>
        Revalidate using revalidatePath
      </button>
    </div>
  );
}
