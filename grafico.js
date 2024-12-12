let cookies = sessionStorage.getItem("cookies");
if (cookies != "true") {
  sessionStorage.setItem("cookies",confirm("Esta pagina utiliza cookies y sus datos podrian ser vendidos en el mercado negro al mejor postor"));
}
console.log(cookies);
const data = {
    labels: [
      'Clientes muy satisfechos',
      'Clientes extraordinariamente satisfechos',
      'Clientes satisfechos'
    ],
    datasets: [{
      label: 'numero clientes',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  
  const ctx = document.getElementById('miGrafico').getContext('2d');

  const miGrafico = new Chart(ctx, {
    type: 'doughnut',
    data: data,
      
  });