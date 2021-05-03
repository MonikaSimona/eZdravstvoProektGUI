$(() => {

    const labels = [
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
      const data = {
        labels: labels,
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(182, 255, 99)',
          borderColor: 'rgb(125, 255, 99)',
          data: [16, 10, 5, 2, 20, 30, 45,50],
        }]
      };
 
      const config = {
        type: 'line',
        data,
        options: {}
      };
   
      
      const labels2 = [
        'Monday',
        'Thuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ];
      const data2 = {
        labels: labels2,
        datasets: [{
          label: 'My Second dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',

          data: [16, 10, 5, 2, 20, 30, 45,50],
        }]
      };
    
      const config2 = {
        type: 'line',
        data:data2,
        options: {}
      };

      var myChart = new Chart($('#myChart'), config);
      var myChart2 = new Chart($('#myChart2'), config2);
      var myChart3 = new Chart($('#myChart3'), config2);


})