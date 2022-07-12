import { Dispatch, SetStateAction } from "react"

export interface CognitoUserInterface {
Session?: string
authenticationFlowType?: string
challengeName?: string | undefined
challengeParam?: {}
client?: {}
keyPrefix?: string
pool?: {}
signInUserSession?: {idToken: {jwtToken: string}} 
storage?:{}
userDataKey?: string
username?:string
}

export interface UserContextInterface {
    user: CognitoUserInterface | null
    setUser: Dispatch<SetStateAction<CognitoUserInterface | null>>
}