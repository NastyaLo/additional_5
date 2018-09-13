module.exports = function check(str, bracketsConfig) {
    let result;
    let check = true;
    let switcher = true;

    if(str.length%2 == 1) return false;

    for(let i = 0; i < bracketsConfig.length; i++) {
        while(switcher) {
            if (bracketsConfig[i][0] == bracketsConfig[i][1]) {

                let counter = 0;
                for (let k = 0; k < str.length; k++) {
                    if (str[k] == bracketsConfig[i][0]) {
                        counter++;
                    } else {
                        break;
                    }
                };

                if (counter%2 == 0) {
                    result = true;
                    switcher = false;
                } else {
                    result = false;
                    switcher = false;
                };

            } else {
                open = str.lastIndexOf(bracketsConfig[i][0]);
                close = str.indexOf(bracketsConfig[i][1], open);
                if((close-open)%2 == 0 && close != -1 && open != -1) {
                    check = false;
                };

                if (open == -1 || close == -1) {
                    if(str.length == 0)  {
                        result = true;
                        switcher = false;
                    } else {
                        result = false;
                        switcher = false;
                    };
                };

                str = str.substring( 0, close ) + str.substring( close+1 );
                str = str.substring( 0, open ) + str.substring( open+1 );
            };
        };


        switcher = true;
        continue;
    };

    if (!check) result = false;
    return result;
}
