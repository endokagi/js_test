//Write a short program that convert currency from Thai baht to US dollar. 
//Input can be only ﬂoat or integer  
//Return value must be string with preﬁx ‘$’, ex. ‘$3.00’ 
//Return value must show only two decimal points

// ฿1 = 0.03 usd

function convert(currency) {
    if (typeof currency === 'number') {
        return `$${(currency * 0.03).toFixed(2)}`;
    } else return 'Not Money Na~~!';

}
module.exports = convert;