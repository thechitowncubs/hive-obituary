// helpers.ts

/**
 *
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @returns {Promise<T>}
 */
export async function createRequest<T>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(input, init);
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }