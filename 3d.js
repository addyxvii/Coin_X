$(function() {
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,50)",
            strokeColor: "rgba(220,220,220,50)",
            pointColor: "rgba(220,220,220,50)",
            pointStrokeColor: "#000",
            pointHighlightFill: "#000",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0)",
            strokeColor: "rgba(151,187,205,0)",
            pointColor: "rgba(151,187,205,0)",
            pointStrokeColor: "#000",
            pointHighlightFill: "#000",
            pointHighlightStroke: "rgba(151,187,205,0)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};


});
function createGraph(data, dates){
  var graph = document.querySelector('.graph');
  $('.graph').css('display', 'inline-block');
  var ctx= graph.getContext('2d');
  var myLineChart = new Chart(ctx).Line({
    labels:dates,
    datasets: [
      {
        label:"Bitcoin Price",
        data:data

      }
    ]
  },{datasetFill: false,
    scaleShowGridLines : false,
    pointDot : false
  });

}
