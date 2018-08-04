function parallax() {
  setpos("#bg1");
  setpos("#bg2");
  setpos("#bg3", 4);
  setpos("#bg4");
  setpos("#bg5");
  setpos("#bg6");
  setpos("#bg7");

}



function setpos(element, factor) {
  if ($(element).offset() != undefined){
    factor = factor || 2;

    var offset = $(element).offset();
    var w = $(window);

    var posx = (offset.left - w.scrollLeft()) / factor;
    var posy = (offset.top - w.scrollTop()) / factor;

    $(element).css('background-position', '50% ' + posy + 'px');

    // use this to have parralax scrolling vertical and horizontal
    //$(element).css('background-position', posx+'px '+posy+'px');
  }

}

$(document).ready(function () {
  var scatterChartData = {
    datasets: [{
      label: "Others",
      borderColor: "rgba(255,0,0,1)",
      backgroundColor: "rgba(255,0,0,1)",
      data: [{
        x: 36,
        y: 12,
      }, {
        x: 23,
        y: 13,
      }, {
        x: 22,
        y: 14,
      }, {
        x: 27,
        y: 31,
      }, {
        x: 22,
        y: 49,
      },, {
        x: 18,
        y: 29,
      }, {
        x: 22,
        y: 22,
      }, {
        x: 32,
        y: 19,
      }, {
        x: 23,
        y: 36,
      }, {
        x: 23,
        y: 39,
      }, {
        x: 27,
        y: 47,
      }]
    }, {
      label: "Sri Lanka",
      borderColor: "rgba(0,0,255,1)",
      backgroundColor: "rgba(0,0,255,1)",
      data: [{
        x: 26,
        y: 5,
      }]
    }]
  };
  $.each(scatterChartData.datasets, function(i, dataset) {
  });
  var ctx = document.getElementById("canvas").getContext("2d");
  window.myScatter = Chart.Scatter(ctx, {
    data: scatterChartData,
    options: {
      title: {
        display: true,
        text: 'Chart.js Scatter Chart'
      },
      scales: {
        xAxes: [{
          position: 'bottom',
          gridLines: {
            zeroLineColor: "rgba(0,255,0,1)"
          },
          scaleLabel: {
            display: true,
            labelString: '2017 GHI score'
          }
        }],
        yAxes: [{
          position: 'left',
          gridLines: {
            zeroLineColor: "rgba(0,255,0,1)"
          },
          scaleLabel: {
            display: true,
            labelString: '% Reduction in GHI Score'
          }
        }],
      },
      showLines: false
    }
  });




  parallax();
}).scroll(function () {
  parallax();
});
