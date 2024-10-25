const repeatString = function (str, num) {
    let final = "";
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            final = final.concat(str);

        }

        return final;  
    }

    return "ERROR";
    
    
};

// Do not edit below this line
module.exports = repeatString;
