import { createRequest } from "helpers"

// userApi.ts
const HOST = "127.0.0.1:3000"
const SCHEME = "http"

const PATH = '/users/';

export interface BlockID {
    block: string;
}

/**
 *
 * @param {Record<string, string>} [init]
 * @returns {Promise<BlockID[]>}
 */
export function fetchBlocks(
  init?: Record<string, string>
): Promise<BlockID[]> {
  const searchParams = new URLSearchParams(init);
  const QUERY = searchParams.toString();
  const input = `${SCHEME}://${HOST}/${PATH}?${QUERY}`;

  return createRequest<BlockID[]>(input);
}