// Ratings and Rewviews : Lambda Function
// since all ratings on the web are curated bs lets just write a micro-sevice to return mostly 4.8s
// we will throw in the occasional 4.7 and 4.9 just to seem legit.
//
//
exports.handler = function(event, context) {
  console.log("ratings and reviews handler start : ", event, context);
  // 1/10 times its a 4.9
  // 1/10 times its a 4.7
  // all other times its a 4.8
  var rand = Math.floor(Math.random() * 10 + 1);
  var answer = 4.8
  switch (rand) {
    case 1:
        answer = 4.7;
        break;
    case 10:
        answer = 4.9;
        break
  }
  console.log("ratings and reviews handler end : ", answer);
  context.succeed({"rating":answer});
};
