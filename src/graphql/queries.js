import {gql} from '@apollo/client';

export const GET_REPOSITORIES = gql`
    query{
        repositories
            {edges
                {node
                    {fullName,
                    id,
                    description,
                    language,
                    ownerAvatarUrl,
                    stargazersCount,
                    forksCount,
                    reviewCount,
                    ratingAverage}}}
    }    
`;

export const AUTHORIZED_USER=gql`
    query{
        authorizedUser{
            id
            username
        }
    }
`;