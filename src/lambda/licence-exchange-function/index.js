const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();

exports.handler = async (event) => {

  console.log(event);

  // パラメータとしてメールアドレスとトレーニング日を取得
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
