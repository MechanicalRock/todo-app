import {gql} from '@apollo/client'

export const PUT_DATA = gql`
mutation  saveFeedback($rating: Int!, $reason: String!) {
  saveFeedback(
    rating: $rating
    reason: $reason
  ){
      id
      rating
      reason
  }
}

`