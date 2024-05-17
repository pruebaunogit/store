
const tipo_cambio = 3.70;

function formatDinero(monto = 0) {
    let montoFormat = 0;
    if (monto >= 0) {
        // montoFormat =  new Intl.NumberFormat("pe-PE", { style: "currency", currency: "PEN" }).format(
        montoFormat = new Intl.NumberFormat("pe-PE", { minimumFractionDigits: 2 }).format(
            monto * tipo_cambio,
        );
    } else {
        return 0;
    }
    return "S/ " + montoFormat;
}



const limitar_descrip = () => {
    const wordLimitElements = document.querySelectorAll('.product-info');
    wordLimitElements.forEach(element => {
        const textElement = element.querySelector('.product-description');
        const text = textElement.textContent.trim();
        const wordLimit = 10; // Cambia esto al límite de palabras deseado

        const words = text.split(' ').slice(0, wordLimit).join(' ');
        textElement.textContent = words + (text.split(' ').length > wordLimit ? '...' : '');
    });
}
export { formatDinero, limitar_descrip }