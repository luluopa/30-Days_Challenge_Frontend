function handleChanges() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value + 'px')
}

function main() {
    const INPUTS = document.querySelectorAll(".inputs")

    INPUTS.forEach(input => {input.addEventListener('change', handleChanges)})
}

main()