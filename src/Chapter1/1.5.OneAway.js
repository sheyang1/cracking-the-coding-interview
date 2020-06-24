function oneAway(str1, str2) {

    if (Math.abs(str1.length - str2.length) > 2) {
        return false;
    }
    
    let differences = 0;
    for (let i = 0, j = 0; i < str1.length, j < str2.length; i++, j++) {
        if (str1[i] !== str2[j]) {
            differences++;
            if (str1.length !== str2.length) {
                if (str1[i + 1] === str2[j]) {
                     i++;
                } else if (str1[i] === str2[j + 1] && str1.length !== str2.length)  {
                    j++;
                }
            }
        }
        
        if (differences > 1) {
            return false;
        }
    }    
    return true;
}

exports.oneAway = oneAway;

