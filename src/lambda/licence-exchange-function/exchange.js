const apiUrl = 'https://xrw58pwc75.execute-api.ap-northeast-1.amazonaws.com/dev/licence'
const submitButton = document.getElementById("submit")
submitButton.addEventListener('click', async () => {
  const email = document.getElementById('email').value
  const trainingDate = document.getElementById('training-date').value
  const data = { "email": email, "training-date": trainingDate };
  console.log(data);
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  const json = await response.json()
  console.log(json);
})