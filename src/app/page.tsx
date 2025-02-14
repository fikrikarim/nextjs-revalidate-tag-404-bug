import { CACHE_TAG } from "@/cache-tag";
import { revalidateUsingPath, revalidateUsingTag } from "@/revalidate";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [];
}

export default async function Home() {
  await fetch("https://pokeapi.co/api/v2/pokemon", {
    next: { tags: [CACHE_TAG] },
  }).then((r) => r.json());

  const date = new Date();
  const dateString = date.toLocaleString();

  if (date.getSeconds() % 2 === 0) notFound();

  return (
    <div>
      <h1 className="text-lg">Homepage</h1>
      <h2 className="text-lg">
        This page is only available if you open it when date.getSeconds() is odd
      </h2>

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
