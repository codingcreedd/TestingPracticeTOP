//INDEX.JS
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
        if(b == 0)
            return 'Math Error';
        else
            return a / b;
    },

    multiply: function(a, b){
        return a * b;
    }
}

function analyzeArray(arr)
{
    const average = (array) => {
        let sum = 0;
        for(let i = 0; i < array.length; i++)
            sum += array[i];

        return sum / array.length;
    }

    const min = (array) => {
        let min = 0;
        if(array.length > 0)
            min = array[0];

        for(let i = 0; i < array.length; i++)
        {
            if(array[i] < min)
                min = array[i];
        }

        return min;
    }

    const max = (array) => {
        let max = 0;
        for(let i = 0; i < array.length; i++)
        {
            if(array[i] > max)
                max = array[i];
        }

        return max;
    }

    const size = (array) => {
        return array.length;
    }

    return{
        average: average(arr),
        min: min(arr),
        max: max(arr),
        size: size(arr)
    }
}

module.exports = {
    capitilize,
    reverse,
    calculator,
    analyzeArray
}