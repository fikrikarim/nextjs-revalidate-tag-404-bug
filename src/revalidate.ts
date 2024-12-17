"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { CACHE_TAG } from "./cache-tag";

export async function revalidateUsingTag() {
  revalidateTag(CACHE_TAG);
}

export async function revalidateUsingPath() {
  revalidatePath("/");
}
