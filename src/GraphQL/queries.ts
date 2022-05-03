import {gql} from '@apollo/client'

export const GET_DATA = gql`
    query{
        getNote(NoteId: "1") {
        title
        NoteId
        content
    }
}
`