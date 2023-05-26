const housePrice = {
    sources: ['Williamsburg', 'Park Slope', 'DUMBO', 'Average'],
    yearLabels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008','2009', '2010', '2011', 
                 '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    revenue: {
      'Williamsburg': [164535, 206451, 260734, 289991, 354621, 452626, 492583, 504311, 484698, 429362, 419012, 437765,
                       466988, 571717, 660671, 788384, 843496, 858311, 896839, 939990, 912226, 1014559, 1025013],
      'Park Slope': [224832.5, 274540.5, 355011, 409080.5, 466497.5, 555605.5, 590288.5, 605347, 611361.5, 564013, 555410, 585439,
                     624534, 745008.5, 866811, 966012.5, 1045891, 1032983, 1041669, 1233646, 1181357, 1343190, 1372290],
      'DUMBO': [193772, 239757, 298034, 349080, 409406, 466773, 495589, 495745, 496679, 464988, 462748, 481160,
                510467, 608974, 742758, 851072, 900037, 879287, 971084, 995153, 1045081, 1135716, 1194082],
      'Average': [192557.1, 220342.1, 257351.4, 299964.8, 351590.6, 423225.3, 452445.9, 456468.1, 448089.8, 405881.5, 413410.7, 420192.9,
                  440412.8, 496976.8, 566708.9, 641983.2, 696782, 739910.2, 784218.9, 840788.9, 822059.8, 889282.9, 892044.8]
    },
  };
  
    
  // Get canvas element
  const canvas = document.getElementById('parkChart');
  const ctx = canvas.getContext('2d');

    
  //   Create line chart
  //   Create line chart
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: housePrice.yearLabels,
      datasets: [
        {
          label: housePrice.sources[0],
          data: housePrice.revenue[housePrice.sources[0]],
          borderColor: 'rgb(172,211,104)',
        //   backgroundColor: 'rgba(172,211,104, 0.4)', // Red background
          fill: false
        },
        {
          label: housePrice.sources[1],
          data: housePrice.revenue[housePrice.sources[1]],
          borderColor: 'rgb(28,83,72)',
        //   backgroundColor: 'rgba(28,83,72, 0.4)', // Blue background
          fill: false
        },
        {
          label: housePrice.sources[2],
          data: housePrice.revenue[housePrice.sources[2]],
          borderColor: 'rgb(67,159,116)',
        //   backgroundColor: 'rgba(67,159,116, 0.4)', // Green background
          fill: false
        },
        {
          label: housePrice.sources[3],
          data: housePrice.revenue[housePrice.sources[3]],
          borderColor: 'gray',
        //   backgroundColor: 'gray',
        //   backgroundColor: 'rgba(134,204,121, 0.4)', // Orange background
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
            text: 'House Price Index',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        }
      }
    }
  });
