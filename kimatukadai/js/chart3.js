var labels = ['HP53','攻撃51','防御53','素早さ40','特防56','特攻61'];

var data = {
    labels: labels,
    datasets: [{
        label: '種族値',
        borderColor: 'rgb(130, 60, 70)',
         backgroundColor: 'rgb(255, 100, 130)',
        data: [53, 51, 53, 40, 56, 61],
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
        message = "不正解";
    } else if (language == 3) {
        message = "正解";
    } else {
        message = "想定されていない引数です．";
    }

    alert(message);

}