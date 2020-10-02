'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "orders":[{
            "order":{
              "id":"Order 1"
            }
        }],
        input: event,
      },
      null,
      2
    ),
  };
};
