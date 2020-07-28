const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

// Deck Type
const DeckType = new GraphQLObjectType({
    name: 'Deck',
    fields: () => ({
        CardId: {type:GraphQLString},
        Name: {type:GraphQLString},
        Language: {type:GraphQLInt}
    })
})

// Card Type
const CardType = new GraphQLObjectType({
    name: 'Card',
    fields: () => ({
        OperationResult: {type:GraphQLString},
        CardData: {type:CardDataType}
    })
})

// CardData Type
const CardDataType = new GraphQLObjectType({
    name: 'CardData',
    fields: () => ({
        CardFeature: {type:CardFeatureType}
    })
})

// CardFeature Type
const CardFeatureType = new GraphQLObjectType({
    name: 'CardFeature',
    fields: () => ({
        Id: {type:GraphQLInt}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        search: {
            type: new GraphQLList(DeckType),
            resolve(parentValue, args) {
                return axios.post('https://api.hunterer.wizards.com/Business/CardSearch/Web/Search',
                    {
                        "FirstResult":1,
                        "MaxResults":499,
                        "SearchTerms":[
                             {
                                   "Id":15,"Value":"serra"
                             }],
                        "UseAndForColor":true,
                        "UseExactColor":true
                  }
                )
                .then(res => res.data.CardData);
            }
        },
        random: {
            type: new GraphQLList(DeckType),
            resolve(parentValue, args) {
                return axios.post('https://api.hunterer.wizards.com/Business/CardSearch/Web/GetRandomCard',
                    {
                        "FirstResult":1,
                        "MaxResults":499,
                        "SearchTerms":[
                             {
                                   "Id":15,"Value":"serra"
                             }],
                        "UseAndForColor":true,
                        "UseExactColor":true
                  }
                )
                .then(res => res.data.CardData);
            }
        },
        cardinfo: {
            type: new GraphQLNonNull(CardType),
            args: {
                CardID:{type: new GraphQLNonNull(GraphQLString)},
                // IncludeOracle:{type:GraphQLBoolean},
                // IncludePrinting:{type:GraphQLBoolean},
                // IncludeRulings:{type:GraphQLBoolean},
                // IncludeLegality:{type:GraphQLBoolean},
            },
            // CardID: "009e4cdc-4674-4551-abee-18fd343fd97f", IncludeOracle:true, IncludeRulings:true, IncludePrinting:true, IncludeLegality:true
            resolve(parentValue, args) {
               return axios.get('https://api.hunterer.wizards.com/Business/CardSearch/Web/GetCardInfo?CARDID='+args.CardID)
                .then(res => res.data);
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});