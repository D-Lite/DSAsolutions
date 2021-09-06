var isValid = function(s) {
    //     A stack implementation in javasccript to push in new values and pop out the recent ones.
        storethem = [];
        
    //     All the paranthesis are organized into an objecct 
        const paraObj = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }
        
        for(i in s) 
    //         to loop over every single elements of s
            {
                if(paraObj.hasOwnProperty(s[i]))
    //                 if any of the object value is an element, push(add to stack)
                    {
                        storethem.push(s[i]);
                    }
                else 
                    {
                        if(paraObj[storethem[storethem.length - 1 ]] === s[i])
                            {
                                storethem.pop()
                            }
                        else {
                            return false;
                        }
                    }
            }
        return storethem.length === 0 ? true : false ;
    //     If the length of storethem is 0, then true(balanced)
    };