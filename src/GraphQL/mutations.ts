import {gql} from '@apollo/client'

export const PUT_DATA = gql`
mutation  saveNote($content: String!, $NoteId: ID!, $title: String!) {
  saveNote(
    NoteId: $NoteId
    content: $content
    title: $title
  ){
      NoteId
      content
      title
  }
  
}

`