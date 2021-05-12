document.getElementById('button').addEventListener('click', () => {
  let para = document.getElementById('dat')
  let inpvalue=document.getElementById('inp').value
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inpvalue}&appid=12163a331ab780b1f7af8a43b44d24c1`)
  .then(response => response.json())
  .then(data => {
    let newvalue = data['name']
    let tempvalue= data['main']['temp']
    para.innerHTML = newvalue
    para.innerHTML = `${Math.round(tempvalue-273.15)} °C`
    console.log(data)
  
  })
  .catch((error) => {
    para.innerHTML='Wrong city';
  });
})
