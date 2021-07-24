var labels = ['HP90','攻撃90','防御85','素早さ100','特防90','特攻125'];

var data = {
    labels: labels,
    datasets: [{
        label: '種族値',
        borderColor: 'rgb(130, 60, 70)',
         backgroundColor: 'rgb(255, 100, 130)',
        data: [90, 90, 85, 100, 90, 125],
    }]
};

var config = {
    type: 'radar',
    data,
    options: {},
};

var radarChart = new Chart(
    document.getElementById('RadarChart'),
    config,
);

function question(language) {
    var message = "";

    if (language == 1) {
        message = "正解";
    } else if (language == 2) {
        message = "不正解";
    } else if (language == 3) {
        message = "不正解";
    } else {
        message = "想定されていない引数です．";
    }

    alert(message);

}