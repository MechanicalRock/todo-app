import {gql} from '@apollo/client'

export const GET_DATA = gql`
query {
  getAllFeedback {
    feedback {
      id
      rating
      reason
    }
  }
}
`