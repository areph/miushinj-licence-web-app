const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();

exports.handler = async (event) => {

  console.log(event);
  console.log(event["body"]);

  const req = JSON.stringify(event["body"]);

  console.log("---------")
  console.log(req);

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

  // エラーハンドリング
  // TODO: パラメータにメールアドレスとトレーニング日がない場合はエラーとして処理を終了
  // TODO: ライセンスコードが取得できない場合はエラーとして処理を終了

  // TODO: 取得したライセンスコードをJSONとして返却したい
  const response = {
    statusCode: 200,
    body: JSON.stringify({ licenceCode: res[0]['licenceCode'] }),
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
