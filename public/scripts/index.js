// Arquivo sendo chamado dentro Index.html...
const buttonSearch = document.querySelector("#page-home main a")
// Quando clicar no botão Search do index.html dentro da tag main, tag a
const modal = document.querySelector("#modal")
// Pega o id "modal"...
const close = document.querySelector("#modal .header a")

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
    // Quando clicar no botão search, remove a classe "hide" abrindo o modal
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
    // Quando clicar no "x" do modal, esconde o modal
})