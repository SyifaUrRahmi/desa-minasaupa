const data = {
  labels: [
    "75+",
    "70-74",
    "65-69",
    "60-64",
    "55-59",
    "50-54",
    "45-49",
    "40-44",
    "35-39",
    "30-34",
    "25-29",
    "20-24",
    "15-19",
    "10-14",
    "5-9",
    "0-4",
  ],
  datasets: [
    {
      label: "Laki-laki",
      backgroundColor: "rgba(65, 196, 207, 1)",
      borderColor: "rgba(65, 196, 207, 1)",
      borderWidth: 1,
      data: [
        -13, -105, -134, -140, -149, -137, -123, -139, -84, -104, -91, -81, -47,
        -39, -38, -36,
      ],
    },
    {
      label: "Perempuan",
      backgroundColor: "rgba(239, 50, 202, 1)",
      borderColor: "rgba(239, 50, 202, 1)",
      borderWidth: 1,
      data: [
        12, 112, 139, 124, 160, 119, 133, 114, 118, 118, 75, 86, 65, 47, 37, 39,
      ],
    },
  ],
};
// pyramid.js
// pyramid.js
const ctx = document.getElementById("populationPyramid").getContext("2d");

const populationPyramid = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "Jumlah Penduduk",
          font: {
            family: "Poppins", // Nama font yang digunakan
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        ticks: {
          font: {
            family: "Poppins", // Nama font yang digunakan
            size: 12,
          },
          callback: function (value) {
            return Math.abs(value);
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Kelompok Umur",
          font: {
            family: "Poppins", // Nama font yang digunakan
            size: 14,
            weight: "bold",
            lineHeight: 1.2,
          },
        },
        ticks: {
          font: {
            family: "Poppins", // Nama font yang digunakan
            size: 12,
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + Math.abs(tooltipItem.raw);
          },
        },
        titleFont: {
          family: "Poppins", // Nama font yang digunakan
          size: 14,
          weight: "bold",
          lineHeight: 1.2,
        },
        bodyFont: {
          family: "Poppins", // Nama font yang digunakan
          size: 12,
        },
      },
    },
  },
});
