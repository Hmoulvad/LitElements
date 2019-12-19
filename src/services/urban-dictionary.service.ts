export const lookUpWord = async (word: string) => {
    const response = await fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key": "8fff8dc8b5msh72ae5c0eb263111p1f5d94jsn6cb122ddc4af"
        }
    });

    return await response.json();
}