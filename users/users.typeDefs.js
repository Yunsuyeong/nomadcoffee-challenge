import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String
    location: String
    avatarURL: Upload
    githubUsername: String
    followers: [User]
    following: [User]
    totalFollowers: Int!
    totalFollowing: Int!
    isMe: Boolean!
    isFollowing: Boolean!
    createdAt: String!
    updatedAt: String!
  }
  type Query {
    seeProfile(username: String!): User
  }
`;
