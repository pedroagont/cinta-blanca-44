const checkbox = document.getElementById('checkbox')

console.log(checkbox.checked);

checkbox.addEventListener('click', () => {
  if (!checkbox.checked) console.log('no quiere pizza')
  else console.log('quiere pizza');
  console.log(checkbox.checked);
})
