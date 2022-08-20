const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();

exports.handler = async (event) => {

  // パラメータとしてメールアドレスとトレーニング日を取得
  const email = event['email'];
  const trainingDate = event['training-date'];

  console.log(`email: ${email}, trainingDate: ${trainingDate}`);

  // メールアドレスとトレーニング日をキーにしてDynamoDBからデータを取得
  const params = {
    "TableName": "licence-exchange-table",
    "KeyConditionExpression": "email = :v1 and trainingDate = :v2",
    "ExpressionAttributeValues": {
      ":v1": {
        "S": email
      },
      ":v2": {
        "S": trainingDate
      }
    }
  }

  console.log("===== DDB Query Start =====")
  const res = await ddbQuery(params);
  console.log(res)
  console.log("===== DDB Query END =====")

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

function ddbQuery(params) {
  return new Promise((resolve, reject) => {
    dynamodb.query(params, (err, data) => {
      if (err) {
        reject(err, err)
      } else {
        resolve(data.Items)
      }
    })
  })
}
