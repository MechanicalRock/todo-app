import { useState } from "react";
import { UserContext } from "./Components/context";
import Pages from "./Pages";

export default function App() {
  const [user, setUser] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Pages />
    </UserContext.Provider>
  );
}
