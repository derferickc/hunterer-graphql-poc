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

// Card Type
const CardType = new GraphQLObjectType({
    name: 'Card',
    fields: () => ({
        _id: {type:GraphQLString},
        _index: {type:GraphQLString},
        _type: {type:GraphQLString},
        _source: {type:CardDataType}
    })
})

// CardData Type
const CardDataType = new GraphQLObjectType({
    name: 'CardData',
    fields: () => ({
        LanguageCode: {type:GraphQLString},
        EnglishCardTitle: {type:GraphQLString},
        RulesText: {type:GraphQLString},
        ManaCost: {type:GraphQLString},
        ConvertedManaCost: {type:GraphQLString},
        ArtistCredit: {type:GraphQLString},
        SetName: {type:GraphQLString},
        SeriesNumber: {type:GraphQLString},
        ReleaseDate: {type:GraphQLString},
        CardSubTypes: {type:GraphQLList(GraphQLString)}
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        search: {
            type: new GraphQLList(CardType),
            resolve(parentValue, args) {
                return axios.post('https://search-gatnext-dev-v3txm6mfpuusi3lqd7f4vod2xq.us-west-2.es.amazonaws.com/_search',
                {
                    "query": {
                        "bool": {
                            "filter": [
                                { "term": { "CardColor": "r"   }},
                                { "term": { "SetCode": "xln" }},
                                { "term": { "LanguageCode": "en-us" }}
                            ]
                        }
                    }
                }
                )
                .then(res => res.data.hits.hits);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});