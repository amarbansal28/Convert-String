function convertString(str){
		let conStr = '';
    for(let i =0; i < str.length; i++){
	      conStr += str[i].toLowerCase();
				if((i+1 < str.length) 
        && str[i+1] === str[i+1].toUpperCase()){
        		conStr += '_';
        }
    }
		return conStr;
}

console.log(convertString("ThisIsReact"))

// o/p this_is_react
