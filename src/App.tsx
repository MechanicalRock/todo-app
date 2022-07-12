import { Dispatch, SetStateAction, useState } from "react";
import { UserContext } from "./Components/context";
import { CognitoUserInterface } from "./lib/types";
import Pages from "./Pages";

export default function App() {
  const [user, setUser] = useState<CognitoUserInterface | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Pages />
    </UserContext.Provider>
  );
}
