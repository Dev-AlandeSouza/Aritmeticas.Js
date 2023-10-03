let exit = false; // Inicializa exit como falso antes do loop

do {
    const option = prompt(`Qual operação aritmética deseja fazer? 
Digite o número referente à operação:
1- Simples.
2- Ponderada.
3- Mediana.
4- Moda.
5- Sair`);

    const parsedOption = parseInt(option);

    switch (parsedOption) {
        case 1:
            const simpleNumbers = prompt("Informe os números separados por espaços para calcular a Média Aritmética Simples:");
            const simpleArray = simpleNumbers.split(' ').map(Number);

            if (simpleArray.length === 0 || simpleArray.some(isNaN)) {
                alert("Entrada inválida. Certifique-se de fornecer números válidos.");
                break;
            }

            const simpleAverage = (simpleArray.reduce((accum, num) => accum + num, 0) / simpleArray.length).toFixed(2);

            alert(`Média Aritmética Simples: ${simpleAverage}`);
            break;

        case 2:
            const weightedInput = prompt(`Informe os números e pesos separados por espaços (exemplo: "3 0.5 5 0.3 7 0.2"):`);
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

            alert(`Média Aritmética Ponderada: ${weightedAverage}`);
            break;

        case 3:
            const medianNumbers = prompt(`Informe os números que utilizaremos para calcular a Média Aritmética Mediana:`);
            const medianArray = medianNumbers.split(' ').map(Number);

            if (medianArray.length === 0) {
                alert(`Nenhum número foi fornecido.`);
            } else {
                medianArray.sort((a, b) => a - b);
                const mid = Math.floor(medianArray.length / 2);
                const medianValue = (medianArray.length % 2 === 1) ? medianArray[mid] : ((medianArray[mid - 1] + medianArray[mid]) / 2).toFixed(2);
                alert(`A mediana é: ${medianValue}`);
            }
            break;

        case 4:
            const modaInput = prompt("Informe os números que utilizaremos para calcular a Média Aritmética Mediana:");
            const modaArray = modaInput.split(" ").map(Number);

            const modaResult = (() => {
                if (modaArray.length === 0) {
                    return "O array está vazio.";
                }

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

                return `A moda é ${moda}, que aparece ${biggestCount} vezes.`;
            })();

            alert(modaResult);
            break;

        case 5:
            exit = confirm(`Deseja sair do sistema?`);
            if (exit) {
                alert(`Sistema Fechado!`);
            } else {
                alert(`Vamos tentar novamente!`);
            }
            break;

        default:
            alert(`Opção inválida. Digite novamente a opção selecionada.`);
    }

} while (!exit);
// Loop continua enquanto 'exit' for falso
