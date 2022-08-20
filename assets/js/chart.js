function createChart(canvasID, config) {
    //Define os valores globais do grafico
    return new Chart(
        document.getElementById(canvasID),
        config
    ),

    Chart.defaults.font.size = 14;
    Chart.defaults.font.family = "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
}

const config1 = {
    type: 'bar',
    data: {
        //Legenda de cada coluna
        labels: ['Alimentação', 'Energia', 'Água', 'Emergência', 'Escola/Filhos', 'IPTU', 'IPVA'],
        datasets: [{
            //Titulo do grafico
            label: 'Gastos do mês',
            //Valores de cada coluna
            data: [300, 30, 40, 50, 300, 50, 70],
            //Largura das colunas
            barThickness: 25,
            //Cor das colunas
            backgroundColor: ["yellow", "aqua", "green", "blue", "purple", "darkred", "pink"],
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                labels: {
                    //Tamanho da fonte do titulo
                    font: {
                        size: 20
                    }
                }
            }
        }
    }
};

const config2 = {
    type: 'doughnut',
    data: {
        labels: [
            'IRRF',
            'RECISÃO',
            'CLT'
        ],
        datasets: [{
            label: 'IMPOSTOS',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    },
    options: { responsive: false }
}

createChart('chart1', config1)
createChart('chart2', config2)