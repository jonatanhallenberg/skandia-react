

export type CatFact = {
    fact: string,
    length: number
}

export const getCatFacts = async () => {
    const res = await fetch(`https://catfact.ninja/facts?limit=${limit}`);
    return (await res.json()).data;
}
