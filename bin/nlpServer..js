const spacyNLP = require("spacy-nlp");
const nlp = spacyNLP.nlp;


var nlpServer= {
    
    parse:function(text,callback) {
        nlp.parse(text).then(output => {
           // console.log(output);
            return callback(null,output[0].parse_tree)
          //  console.log(JSON.stringify(output[0].parse_tree, null, 2));
        });
    }
}
module.exports=nlpServer

