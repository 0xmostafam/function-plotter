const plot = () => {
    const { formula, maxNumber, minNumber } = recieveInput()
}

const recieveInput = () => {
    const form = document.getElementById('form');
    const data = new FormData(form);

    const formula = data.get('formula');
    const maxNumber = Number(data.get('max'));
    const minNumber = Number(data.get('min'));

    return { formula, maxNumber, minNumber }
}

const checkInput = ()