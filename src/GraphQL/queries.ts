import {gql} from '@apollo/client'

export const GET_DATA = gql`
    query{
        getAllFeedback() {
        rating,
        reason
    }
}
`