google.charts.load('current', {
  packages: ['corechart', 'line'],
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  
  let data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');        
  data.addColumn('number', 'Temperature'); 

  let options = {
    title: 'Les Franqueses del Valles',
    hAxis: {
      title: 'Hour'
    },
    vAxis: {
      title: 'Temperature',
    },
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);

  let maxDatas = 24;  
  let startHour = 0;  

  setInterval(async function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.6193&longitude=2.2983&hourly=temperature_2m&timezone=Europe%2FBerlin')
      .then(response => response.json())
      .then(dat => {
        console.log(dat);

        data.removeRows(0, data.getNumberOfRows());

        let i = 0;
        startHour = 0;
        dat.hourly.time.forEach(element => {
          if (data.getNumberOfRows() > maxDatas) {
            return;
            
          }

          const date = new Date(element);
          const hour = startHour++; 
          const temperature = dat.hourly.temperature_2m[i];

         
          data.addRow([Math.floor(startHour), temperature]);
          
          i++;
        });

        chart.draw(data, options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}

google.charts.load('current', {
  packages: ['corechart', 'line'],
});

google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
 
  let data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');        
  data.addColumn('number', 'Temperature'); 

  let options = {
    title: 'Gjøvik',
    hAxis: {
      title: 'Hour'
    },
    vAxis: {
      title: 'Temperature',
    },
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
  chart.draw(data, options);

  let maxDatas = 24;  
  let startHour = 0;  

  setInterval(async function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=60.79574&longitude=10.69155&hourly=temperature_2m&timezone=Europe%2FBerlin')
      .then(response => response.json())
      .then(dat => {
        console.log(dat);

        data.removeRows(0, data.getNumberOfRows());

        let i = 0;
        startHour = 0;
        dat.hourly.time.forEach(element => {
          if (data.getNumberOfRows() > maxDatas) {
            return;
          }

          const date = new Date(element);
          const hour = startHour++;  
          const temperature = dat.hourly.temperature_2m[i];

          data.addRow([Math.floor(startHour), temperature]);
          
          i++;
        });
        
        chart.draw(data, options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}
google.charts.load('current', {
  packages: ['corechart', 'line'],
});

google.charts.setOnLoadCallback(drawChart3);

function drawChart3() {

  let data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');        
  data.addColumn('number', 'Temperature'); 

  let options = {
    title: 'New York',
    hAxis: {
      title: 'Hour'
    },
    vAxis: {
      title: 'Temperature',
    },
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div3'));
  chart.draw(data, options);

  let maxDatas = 24; 
  let startHour = 0;  

  setInterval(async function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71427&longitude=-74.00597&hourly=temperature_2m&timezone=Europe%2FBerlin')
      .then(response => response.json())
      .then(dat => {
        console.log(dat);

        
        data.removeRows(0, data.getNumberOfRows());

        let i = 0;
        startHour = 0;
        dat.hourly.time.forEach(element => {
          if (data.getNumberOfRows() > maxDatas) {
            return;
            
          }

          const date = new Date(element);
          const hour = startHour++; 
          const temperature = dat.hourly.temperature_2m[i];

          
          data.addRow([Math.floor(startHour), temperature]);
          
          i++;
        });
        
        

       
        chart.draw(data, options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}

google.charts.load('current', {
  packages: ['corechart', 'line'],
});

google.charts.setOnLoadCallback(drawChart4);

function drawChart4() {
 
  let data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');        
  data.addColumn('number', 'Temperature'); 

  let options = {
    title: 'Barcelona',
    hAxis: {
      title: 'Hour'
    },
    vAxis: {
      title: 'Temperature',
    },
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div4'));
  chart.draw(data, options);

  let maxDatas = 24;  
  let startHour = 0; 

  setInterval(async function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.38879&longitude=2.15899&hourly=temperature_2m&timezone=Europe%2FBerlin')
      .then(response => response.json())
      .then(dat => {
        console.log(dat);

        
        data.removeRows(0, data.getNumberOfRows());

        let i = 0;
        startHour = 0;
        dat.hourly.time.forEach(element => {
          if (data.getNumberOfRows() > maxDatas) {
            return;
           
          }

          const date = new Date(element);
          const hour = startHour++;  
          const temperature = dat.hourly.temperature_2m[i];

          
          data.addRow([Math.floor(startHour), temperature]);
          
          i++;
        });
        
        

        
        chart.draw(data, options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}


google.charts.load('current', {
  packages: ['corechart', 'line'],
});

google.charts.setOnLoadCallback(drawChart5);

function drawChart5() {
  
  let data = new google.visualization.DataTable();
  data.addColumn('number', 'Time');        
  data.addColumn('number', 'Temperature'); 

  let options = {
    title: 'Tokyo',
    hAxis: {
      title: 'Hour'
    },
    vAxis: {
      title: 'Temperature',
    },
  };

  let chart = new google.visualization.LineChart(document.getElementById('chart_div5'));
  chart.draw(data, options);

  let maxDatas = 24;  
  let startHour = 0; 

  setInterval(async function () {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.69171&hourly=temperature_2m&timezone=Europe%2FBerlin')
      .then(response => response.json())
      .then(dat => {
        console.log(dat);

       
        data.removeRows(0, data.getNumberOfRows());

        let i = 0;
        startHour = 0;
        dat.hourly.time.forEach(element => {
          if (data.getNumberOfRows() > maxDatas) {
            return;
            
          }

          const date = new Date(element);
          const hour = startHour++;  
          const temperature = dat.hourly.temperature_2m[i];

         
          data.addRow([Math.floor(startHour), temperature]);
          
          i++;
        });
        
        

        
        chart.draw(data, options);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, 1000);
}