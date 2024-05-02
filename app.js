const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
    fetchJoke();
});

const fetchJoke = async () => {
    result.textContent = "Loading...";
    try {
        const response = await fetch(url, {
            headers: {
                Accept: "application/JSON",
                "User-Agent": "learning app",
            },
        });
        if(!response.ok){
            throw new Error("errror");
        }
        const data = await response.json();
        result.textContent = data.joke;
    }catch (error){
        console.log(error.message);
        result.textContent = "Something went wrong...";
    }
};

fetchJoke
