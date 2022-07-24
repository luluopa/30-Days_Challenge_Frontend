function handleChanges() {
    const SUFFIX = this.dataset.type
    document.documentElement.style.setProperty(`--${this.name}`, this.value + SUFFIX)
}

function main() {
    const INPUTS = document.querySelectorAll(".inputs")

    INPUTS.forEach(input => {input.addEventListener('change', handleChanges)})
}

main()