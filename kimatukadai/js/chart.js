var labels = ['HP35','攻撃55','防御40','素早さ90','特防50','特攻50'];

var data = {
    labels: labels,
    datasets: [{
        label: '種族値',
        borderColor: 'rgb(130, 60, 70)',
         backgroundColor: 'rgb(255, 100, 130)',
        data: [35, 55, 40, 90, 50, 50],
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