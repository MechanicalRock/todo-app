import {gql} from '@apollo/client'

export const GET_DATA = gql`
query {
  getAllTodos {
    todos {
      id
      body
    }
  }
}
`