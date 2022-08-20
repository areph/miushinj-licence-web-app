const aws = require('aws-sdk');
const dynamodb = new aws.DynamoDB();

exports.handler = async (event) => {

  // パラメータとしてメールアドレスとトレーニング日を取得
  const email = event['email'];
  const trainingDate = event['training-date'];

  console.log(`email: ${email}, trainingDate: ${trainingDate}`);

  // TODO: メールアドレスとトレーニング日をキーにしてDynamoDBからデータを取得したい
  // TODO: QueryでDDBを検索する
  const params = {
    "TableName": "licence-exchange-table",
    "KeyConditionExpression": "email = :v1 and trainingDate = :v2",
    "ExpressionAttributeValues": {
      ":v1": {
        "S": email
      }
      ,
      ":v2": {
        "S": trainingDate
      }
    }
  }

  console.log("=====START=====")
  const res = await ddbQuery(params, (err, data) => {
    if (err) {
      console.log(`Error!: ${err}`);
    } else {
      console.log("Success!")
      console.log(data.Items);
    }
    console.log("------------")
  })
  console.log(res)
  console.log("===END====")

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
        console.log("----ERROR------")
        reject(err, err)
      } else {
        resolve(data.Items)
      }
    })
  })
}
