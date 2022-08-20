exports.handler = async (event) => {

  // TODO: パラメータとしてメールアドレスとトレーニング日を取得したい
  // TODO: メールアドレスとトレーニング日をキーにしてDynamoDBからデータを取得したい
  // TODO: 取得したライセンスコードをJSONとして返却したい

  // エラーハンドリング
  // TODO: パラメータにメールアドレスとトレーニング日がない場合はエラーとして処理を終了
  // TODO: ライセンスコードが取得できない場合はエラーとして処理を終了

  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
