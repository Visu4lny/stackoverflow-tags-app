import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

interface Tag {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
}

interface TagsResponse {
  items: Tag[];
}

async function fetchTags(): Promise<TagsResponse> {
  try {
    const response: AxiosResponse<TagsResponse> = await axios.get(
      "https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow"
    );
    return response.data;
  } catch (error) {
    throw new Error("Unable to fetch tags");
  }
}

export function useTags() {
  return useQuery("tags", fetchTags);
}
