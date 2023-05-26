const facilityData = [
    
    {
      Name: "Playgrounds",
      revenue: 561,
    },
    {
      Name: "Bathrooms",
      revenue: 92,
    },
    {
      Name: "Pools",
      revenue: 48,
    },
    {
      Name: "Recreation Centers",
      revenue: 34,
    },
    {
      Name: "Tennis Courts",
      revenue: 24,
    },
    {
      Name: "Basketball Courts",
      revenue: 22,
    },
    {
      Name: "Beaches",
      revenue: 7,
    },
    {
      Name: "Nature Centers",
      revenue: 7,
    },
    {
      Name: "Baseball fields",
      revenue: 5,
    },
    {
      Name: "Football Fields",
      revenue: 4,
    }
  ];


  // Get the canvas element
  const canvas = document.getElementById("parkChart");

  // Create a new chart instance
  const ctx = canvas.getContext("2d");

  const parkChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: facilityData.map((park) => park.Name),
      datasets: [
        {
          label: "Number of facilities in parks",
          data: facilityData.map((park) => park.revenue),
          backgroundColor: [
            // "rgba(239,245,210,0.6)",
            "rgba(202,231,177,0.6)" ,
            "rgba(164,217,144,0.6)",
            "rgba(130,202,121,0.6)",
            "rgba(102,188,121,0.6)",
            "rgba(73,167,118,0.6)",
            "rgba(44,131,110,0.6)",
            "rgba(38,115,98,0.6)",
            "rgba(33,99,85,0.6)",
            "rgba(28,83,72,0.6)",
            "rgba(36,62,57,0.6)"
            
            // Add more colors as needed
          ],
        },
      ],
    },
  });
