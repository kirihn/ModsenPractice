import { useEffect, useState } from "react";
import { User, getAuth } from "firebase/auth";

enum AuthState {
    Loading,
    NotAuthed,
    Authed,
    Failed,
}

export function useAuth() {
  const [data, setData] = useState<User | null>(null);
  const [authState, setState] = useState<AuthState>(AuthState.Loading);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const auth = getAuth();

    auth.onAuthStateChanged(
      (user) => {
        if (user) setState(AuthState.Authed);
        else setState(AuthState.NotAuthed);

        setData(user);
      },
      (error) => {
        setState(AuthState.Failed);
        setError(error);
      }
    );
  }, []);

  return { data, authState, error };
}
