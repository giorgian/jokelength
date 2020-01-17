/* global Chart  */
(function() {
  const buildChart = () => {
    const canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    return new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Jokes length over time",
            data: [],
            fill: true
          }
        ],
        labels: []
      }
    });
  };

  const getJokeLength = xhr => {
    try {
      const response = JSON.parse(xhr.response);
      return response.value.joke.length;
    } catch (e) {
      console.error("getJokeLength", e);
      return 0;
    }
  };

  updateChart = chart => {
    return () => {
      const xhr = new XMLHttpRequest();

      xhr.onload = () => {
        const length = getJokeLength(xhr);
        let data = chart.data.datasets[0].data;
        chart.data.labels.push(data.length);
        data.push(length);
        chart.update();
      };
      xhr.open("GET", "/data");
      xhr.send();
    };
  };

  // main
  const chart = buildChart();
  setInterval(updateChart(chart), 1000);
})();
