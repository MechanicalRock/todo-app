import {gql} from '@apollo/client'

export const PUT_DATA = gql`
mutation  saveFeedback($rating: Int!, $id: ID!, $reason: String!) {
  saveFeedback(
    id: $id
    rating: $rating
    reason: $reason
  ){
      id
      rating
      reason
  }
}

`