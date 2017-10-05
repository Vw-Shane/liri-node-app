// ```JavaScript
console.log('this is loaded');

var twitterKeys = {
    consumer_key: '1bcpSI8yziIBzpUPHAghQbsZv',
    consumer_secret: 'bOO1xPcqZrbN0fEM0fwZHWk5rG2nhJaIEhWW7R85SAwea6hiDq',
    access_token_key: '913164873315622912-eRSeWIj3tDDYK2Ihxo0jWa3G1OkYRDR',
    access_token_secret: '0w3cd9tbGTMhYoxw5ibnkBJWYrMMuKEhxE5t3h8Rzqtzm',
}
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '1bcpSI8yziIBzpUPHAghQbsZv',
    consumer_secret: 'bOO1xPcqZrbN0fEM0fwZHWk5rG2nhJaIEhWW7R85SAwea6hiDq',
    access_token_key: '913164873315622912-eRSeWIj3tDDYK2Ihxo0jWa3G1OkYRDR',
    access_token_secret: '0w3cd9tbGTMhYoxw5ibnkBJWYrMMuKEhxE5t3h8Rzqtzm'
});
 
var params = {screen_name: 'ShaneFakeAccnt'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

module.exports = {
    twitterKeys,
    screen_name : params
};
// ```