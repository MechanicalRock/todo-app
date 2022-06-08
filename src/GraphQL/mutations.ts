import {gql} from '@apollo/client'

export const PUT_DATA = gql`
mutation  saveTodo( $body: String!) {
  saveTodo(
    body: $body
  ){
      id
  }
}

`