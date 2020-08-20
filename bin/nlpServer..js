const spacyNLP = require("spacy-nlp");
const nlp = spacyNLP.nlp;


var nlpServer = {

    parse: function (text, callback) {
        nlp.parse(text, {server: nlpServer.server}).then(output => {
            // console.log(output);
            if (!output) {
                return console.log("!!!!!!!!   check server url in file nlp2\\node_modules\\poly-socketio\\src\\global-client.js  line 17")
            }
            var nounPhrases = []
            var nouns = []
            output.forEach(function (phrase) {
                /*  phrase.noun_phrases.forEach(function (item) {
                              nouns.push(item)

                      })*/

                phrase.parse_list.forEach(function (item) {
                    if (item["POS_fine"] == "NN") {
                        nouns.push(item.lemma)
                    }
                })
            })


            return callback(null, nouns)

        });
    },

}
module.exports = nlpServer

