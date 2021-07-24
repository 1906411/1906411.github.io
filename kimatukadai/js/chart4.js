var labels = ['HP108','攻撃130','防御95','素早さ102','特防85','特攻80'];

var data = {
    labels: labels,
    datasets: [{
        label: '種族値',
        borderColor: 'rgb(130, 60, 70)',
         backgroundColor: 'rgb(255, 100, 130)',
        data: [108, 130, 95, 102, 85, 80],
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
        message = "不正解";
    } else if (language == 2) {
        message = "正解";
    } else if (language == 3) {
        message = "不正解";
    } else {
        message = "想定されていない引数です．";
    }

    alert(message);

}