## Star Ratings - AWS Lambda MicroService

Star rating node.js application designed to be used as an [AWS Lambda Function](https://aws.amazon.com/lambda/).
Why bother collecting and averaging real user ratings when all star ratings on the web are 4.8 anyway.  

This microservice removes the middle man and just returns a 4.7,4.8, or 4.9 no matter what.
All the usefulness and truth of a real ratings service except without servers or the pesky work of actually collecting ratings.

### Requirements

- aws account
- python ~2.7.5
- aws cli ~1.7.42
- aws creds in your ~/.aws directory will need:
  - create/delete role permissions
  - create/delete lambda permissions

### Usage
To get started I recommend [this great tutorial on using AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/getting-started-custom-events.html).

- clone this repo
- create zip file index.zip ```$>zip -r index.zip index.js ```
- run ```./setup.sh```,```./invoke.sh```,```./teardown.sh``` to build, test, and remove your function and related policies.

```index.js``` contains code that will return a rating score like so:
```
{
  "rating": 4.8
}
```

### Improvements
None, this is f***ing perfect.
Actually, you must add http endpoint by hand currently, would be easier to add that via aws-cli and then test it via curl in the invoke.sh
