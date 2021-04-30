import {gql} from "apollo-server";

module.exports = gql`
    type Podcast{
        id:ID!
        name:String!
        url:String!
    }
    type Query{
        podcasts:[Podcast]
    }

    input CreatePodcastInput{
        name:String!
        url:String!
    }
    input UpdatePodcastInput{
        name:String
        url:String
    }
    input DeletePayload{
        id:ID!
    }

    type Mutation {
        createPodacast(input:CreatePodcastInput!):Podcast!
        updatePodacast(id: ID, input: UpdatePodcastInput!):Podcast!
    }

`
