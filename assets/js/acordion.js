/* Menu dropdown com referência no tutorial do video localizado em https://www.youtube.com/watch?v=S-VeYcOCFZw&t=388s*/

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('ativo')
    }
  
    document.querySelectorAll("[data-dropdown].ativo").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove('ativo')
    })
  })