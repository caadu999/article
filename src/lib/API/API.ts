import { APIURL } from "./axios";

import type { Data } from "@/types/types";

export default async function getArtigos() {
  const res = await APIURL.get<Data>(
    "/articles/"
  )
  return res.data.results
}