const apiUrl = 'https://xrw58pwc75.execute-api.ap-northeast-1.amazonaws.com/dev/licence'
const submitButton = document.getElementById("submit")
submitButton.addEventListener('click', async () => {
  const email = document.getElementById('email')
  const trainingDate = document.getElementById('training-date')
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "email": email, "training-date": trainingDate })
  })
  const json = response.json()
  console.log(json);
})