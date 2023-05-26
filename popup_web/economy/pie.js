const revenueData = [
    {
      parkName: "Contributions and grants",
      revenue: 32.5,
    },
    {
      parkName: "Government",
      revenue: 28.4,
    },
    {
      parkName: "Program services",
      revenue: 26.9,
    },
    {
      parkName: "Events",
      revenue: 12,
    },
  ];

  const expenseData = [
    {
      parkName: "PROGRAM SERVICES",
      expense: 72.1,
    },
    {
      parkName: "FUNDRAISING ",
      expense: 20.1,
    },
    {
      parkName: "MANAGEMENT & GENERAL",
      expense: 7.8,
    },
  ];

  // Calculate net income for each park
//   parkData.forEach((park) => {
//     park.netIncome = park.revenue;
//   });

  // Get the canvas element
  const canvas = document.getElementById("parkChart1");
  const canvas2 = document.getElementById("parkChart2");

  // Create a new chart instance
  const ctx = canvas.getContext("2d");
  const ctx2 = canvas2.getContext("2d");

  const parkChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: revenueData.map((park) => park.parkName),
      datasets: [
        {
          label: "revenue percentage(%)",
          data: revenueData.map((park) => park.revenue),
          backgroundColor: [
            "rgba(172,211,104, 0.6)",
            "rgba(134,204,121, 0.6)",
            "rgba(67,159,116, 0.6)",
            "rgba(28,83,72, 0.6)"
            
            // Add more colors as needed
          ],
        },
      ],
    },
  });
  const parkChart2 = new Chart(ctx2, {
    type: "pie",
    data: {
      labels: expenseData.map((park) => park.parkName),
      datasets: [
        {
          label: "expense percentage(%)",
          data: expenseData.map((park) => park.expense),
          backgroundColor: [
            "rgba(226, 206, 107, 0.6)",
            "rgba(197,162,76, 0.6)",
            "rgba(143,116,29, 0.6)",
            // Add more colors as needed
          ],
        },
      ],
    },
  });