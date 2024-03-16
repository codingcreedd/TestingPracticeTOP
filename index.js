function capitilize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str)
{
    let reversedString = '';

    for(let i = 0; i < str.length; i++)
        reversedString += str[str.length - 1 - i];

    return reversedString;
}

const calculator = {
    add: function(a, b){
        return a + b;
    },

    subtract: function(a, b){
        return a - b;
    },

    divide: function(a, b){
        return a / b;
    },

    multiply: function(a, b){
        return a * b;
    }
}

module.exports = {
    capitilize,
    reverse,
    calculator
}