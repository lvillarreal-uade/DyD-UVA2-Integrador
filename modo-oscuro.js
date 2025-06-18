document.addEventListener('DOMContentLoaded', () => {
    
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    
    // Función para activar el modo oscuro
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeSwitch) {
            darkModeSwitch.checked = true;
        }
    };
    
    // Función para desactivar el modo oscuro
    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (darkModeSwitch) {
            darkModeSwitch.checked = false;
        }
    };
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
    
    // Click en el switch
    if (darkModeSwitch) {
        darkModeSwitch.addEventListener('click', () => {
            if (localStorage.getItem('darkMode') !== 'enabled') {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
});