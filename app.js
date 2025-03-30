const app = document.getElementById("app")

const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) => {
    event.preventDefault()
    alert("oi")
    }
}

const startApp = () => {
    const content =`
        <form id="form">
            <input type="email" name="email" placeholder="E-mail"/>
            <input type="text" name="text" placeholder="Telefone"/>
            <button>
                Confirmar
            </button>
         </form>
    `

    app.innerHTML = content    
}
startApp()