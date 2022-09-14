const
    loader = setTimeout(removeLoader, 3000),
    { origin } = location,
    signInButton = document.querySelector("#sign-in");

function removeLoader() {
    document.querySelector(".loader").classList.add("hide-loader");
}

signInButton.onclick = (event) => {
    event.preventDefault();
    location.href = `${origin}/pages/home.htm`;
};