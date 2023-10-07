// Função para calcular a Média Aritmética Simples
const calculateSimpleArithmeticMean = () => {
    const simpleInput = document.getElementById('operationSimpleInput').value;
    const simpleArray = simpleInput.split(' ').map(Number);

        const simpleAverage = (simpleArray.reduce((accum, num) => accum + num, 0) / simpleArray.length).toFixed(2);
        document.getElementById('result').textContent = ` Média Aritmética Simples: ${simpleAverage}`;
};

// Função para calcular a Média Aritmética Ponderada
const calculateWeightedArithmeticMean = () => {
    const weightedInput = document.getElementById('operationWeightedInput').value;
    const weightedArray = weightedInput.split(' ').map(Number);

    const weightedAverage = (() => {
        const weightedEntries = [];
        for (let i = 0; i < weightedArray.length; i += 2) {
            const number = weightedArray[i];
            const weight = weightedArray[i + 1] || 1;
            weightedEntries.push({ number, weight });
        }

        const sum = weightedEntries.reduce((accum, { number, weight }) => accum + (number * weight), 0);
        const weightSum = weightedEntries.reduce((accum, { weight }) => accum + weight, 0);
        return (sum / weightSum).toFixed(2);
    })();

    document.getElementById('result').textContent = ` Média Aritmética Ponderada: ${weightedAverage}`;
};

// Função para calcular a Mediana
const calculateMedian = () => {
    const medianInput = document.getElementById('operationMedianInput').value;
    const medianArray = medianInput.split(' ').map(Number);
 
        medianArray.sort((a, b) => a - b);
        const mid = Math.floor(medianArray.length / 2);
        const medianValue = (medianArray.length % 2 === 1) ? medianArray[mid] : ((medianArray[mid - 1] + medianArray[mid]) / 2).toFixed(2);
        document.getElementById('result').textContent = ` A mediana é: ${medianValue}`;
};

// Função para calcular a Moda
const calculateMode = () => {
    const modaInput = document.getElementById('operationModaInput').value;
    const modaArray = modaInput.split(" ").map(Number);

        const counts = {};

        modaArray.forEach(number => {
            if (counts[number] === undefined) {
                counts[number] = 1;
            } else {
                counts[number]++;
            }
        });

        let moda = modaArray[0];
        let biggestCount = counts[modaArray[0]];

        for (const number in counts) {
            if (counts[number] > biggestCount) {
                moda = parseInt(number);
                biggestCount = counts[number];
            }
        }

        document.getElementById('result').textContent = ` A moda é ${moda}, que aparece ${biggestCount} vezes.`;
}

// Associar os manipuladores de eventos aos botões
document.getElementById('operationSimpleSubmit').addEventListener('click', calculateSimpleArithmeticMean);
document.getElementById('operationWeightedSubmit').addEventListener('click', calculateWeightedArithmeticMean);
document.getElementById('operationMedianSubmit').addEventListener('click', calculateMedian);
document.getElementById('operationModaSubmit').addEventListener('click', calculateMode);
