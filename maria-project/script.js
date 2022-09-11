const estilos = [
    'Casual',
    'Fancy',
    'Confortable',
    'Cute',
    'Baggy', 
    'Formal']

    const button = document.getElementById('cloth-picker-button');
    const section = document.getElementById('cloth-picker-chose')
    const p = document.getElementById('style-chosen')

    button.addEventListener('click', () => {
        const estiloEscolhido = estilos[Math.floor(Math.random() * estilos.length)]
        p.innerHTML = 'Your clothes style chosen for today is ' + estiloEscolhido;
        })