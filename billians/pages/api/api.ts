export default async function getApi<T>(url: string) {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<T>;
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
}
