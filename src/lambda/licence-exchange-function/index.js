exports.handler = async (event) => {

  console.log(event);

  // TODO: パラメータとしてメールアドレスとトレーニング日を取得したい
  const email = event['email'];
  const trainingDate = event['training-date'];

  // TODO: メールアドレスとトレーニング日をキーにしてDynamoDBからデータを取得したい
  // TODO: 取得したライセンスコードをJSONとして返却したい

  // エラーハンドリング
  // TODO: パラメータにメールアドレスとトレーニング日がない場合はエラーとして処理を終了
  // TODO: ライセンスコードが取得できない場合はエラーとして処理を終了


  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
