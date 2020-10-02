'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "orders":[{
          
              "id":"Order 1"
          
        },{
          
          "id":"Order 2"
      
    }],
        input: event,
      },
      null,
      2
    ),
  };
};
