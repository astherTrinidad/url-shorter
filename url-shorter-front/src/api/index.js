import url from "../config/url";

export async function shorterUrl(urlOrigin) {
  const response = await fetch(`${url.baseBack}${url.shorterUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(urlOrigin),
  });

  return { text: await response.json(), status: response.status };
}

export async function redirectUrl(keyShorter) {
  const response = await fetch(`${url.baseBack}/${keyShorter}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return { text: await response.json(), status: response.status };
}
