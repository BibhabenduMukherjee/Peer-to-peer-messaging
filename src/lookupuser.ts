import fetch from "cross-fetch";

export function lookupUser(user: string, uri: string, ) {
  return fetch(`${uri}/lookup?user=${user}`,).then((response) => {
    if (response.ok) {
      return response.json() as Promise<Node>;
    }
    throw new Error("user not found");
  });
}