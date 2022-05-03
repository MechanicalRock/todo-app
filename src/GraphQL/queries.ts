import {gql} from '@apollo/client'

export const GET_DATA = gql`
    query{
        getFeedback(id: "2") {
        id, 
        rating,
        reason
    }
}
`