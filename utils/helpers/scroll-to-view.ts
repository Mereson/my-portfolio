export const scrollIntoView = (id: string) => {
    const section = document.getElementById(id)
    console.log(section)
    if (!section) return

    const top = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: "smooth" })
}