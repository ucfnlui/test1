// Sample data for park economy analysis
const parkRevenue = {
  sources: ['Contributions and grants', 'Government support', 'Program service revenue', 'Events(net of direct cost)', 'Total revenue'],
  yearLabels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  revenue: {
    'Contributions and grants': [1137105, 1037233, 812042, 1045386, 956552, 921654, 932046],
    'Government support': [69000, 126398, 182825, 180518, 205002, 170489, 771107],
    'Program service revenue': [386572, 383475, 355871, 356736, 378529, 51486, 344995],
    'Events(net of direct cost)': [839463, 992276, 1221295, 1143001, 1217146, 450092, 814285],
    'Total revenue': [2433687, 2540051, 2572204, 2726388, 2757448, 1594167, 2862632] 
  },
};

const parkExpense = {
  sources: ['Program services', 'Management and General', 'Fundraising', 'Total expense'],
  yearLabels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  expense: {
    'Program services': [2204772, 1978313, 1935599, 1974314, 2024727, 1093001, 1640844],
    'Management and General': [104471, 143141, 161525, 151971, 177588, 138919, 178104],
    'Fundraising': [425263, 406205, 435211, 644088, 509996, 375224, 456282],
    'Total expense': [2734506, 2527659, 2532335, 2770373, 2712311, 1607164, 2275230] 
  },


};
  
// Get canvas element
const canvas = document.getElementById('parkChart');
const canvas2 = document.getElementById('parkChart2');
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
  
//   Create line chart
//   Create line chart
new Chart(ctx, {
  type: 'line',
  data: {
    labels: parkRevenue.yearLabels,
    datasets: [
      {
        label: parkRevenue.sources[0],
        data: parkRevenue.revenue[parkRevenue.sources[0]],
        borderColor: 'rgb(172,211,104)',
        backgroundColor: 'rgba(172,211,104, 0.4)', // Red background
        fill: true
      },
      {
        label: parkRevenue.sources[1],
        data: parkRevenue.revenue[parkRevenue.sources[1]],
        borderColor: 'rgb(28,83,72)',
        backgroundColor: 'rgba(28,83,72, 0.4)', // Blue background
        fill: true
      },
      {
        label: parkRevenue.sources[2],
        data: parkRevenue.revenue[parkRevenue.sources[2]],
        borderColor: 'rgb(67,159,116)',
        backgroundColor: 'rgba(67,159,116, 0.4)', // Green background
        fill: true
      },
      {
        label: parkRevenue.sources[3],
        data: parkRevenue.revenue[parkRevenue.sources[3]],
        borderColor: 'rgb(134,204,121)',
        backgroundColor: 'rgba(134,204,121, 0.4)', // Orange background
        fill: true
      },
      {
        label: parkRevenue.sources[4],
        data: parkRevenue.revenue[parkRevenue.sources[4]],
        borderColor: 'rgb(230, 244, 205)',
        backgroundColor: 'rgba(230, 244, 205,0.4)', // Orange background
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      title: {
        display: false,
        text: 'Revenue Analysis',
        font:{
          size:20,
          weight: 'bold'
        },
        color: 'brown',
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Dollar($)',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }
});


new Chart(ctx2, {
  type: 'line',
  data: {
    labels: parkExpense.yearLabels,
    datasets: [
      {
        label: parkExpense.sources[0],
        data: parkExpense.expense[parkExpense.sources[0]],
        borderColor: 'rgb(226, 206, 107)',
        backgroundColor: 'rgba(226, 206, 107, 0.4)', // Red background
        fill: true
      },
      {
        label: parkExpense.sources[1],
        data: parkExpense.expense[parkExpense.sources[1]],
        borderColor: 'rgb(143,116,29)',
        backgroundColor: 'rgba(143,116,29, 0.4)', // Blue background
        fill: true
      },
      {
        label: parkExpense.sources[2],
        data: parkExpense.expense[parkExpense.sources[2]],
        borderColor: 'rgb(197,162,76)',
        backgroundColor: 'rgba(197,162,76, 0.4)', // Green background
        fill: true
      },
      {
        label: parkExpense.sources[3],
        data: parkExpense.expense[parkExpense.sources[3]],
        borderColor: 'rgb(239, 234, 110)',
        backgroundColor: 'rgba(239, 234, 110,0.4)', // Orange background
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins:{
      title: {
        display: false,
        text: 'Expense Analysis',
        font:{
          size:20,
          weight: 'bold'
        },
        position:'bottom',
        color: 'brown',
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Year',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Dollar($)',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      }
    }
  }
});

  
  