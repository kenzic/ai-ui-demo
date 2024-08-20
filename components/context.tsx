import { createContext, useContext, useState } from "react";

export type Message = {
  role: "user" | "system" | "assistant";
  content: string;
  parsed?: JSON;
};

export type Messages = Message[];

export type UIState = {
  id: string;
  queryId: string;
  component: string;
  data: Record<string, any>;
};

export type UIStates = UIState[];

type QueryLinkProps = {
  children: React.ReactNode;
  query: string;
};

const AIUIComponentContext = createContext<{
  makeQuery: (query: string) => void;
  uiState: UIStates;
  loading: boolean;
}>({
  makeQuery: () => {},
  uiState: [],
  loading: false,
});

async function runQuery(query: string) {
  const response = await fetch("/api/ui", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  return response.json();
}

type ProviderProps = {
  children: React.ReactNode;
};

export const IUIProvider = ({ children }: ProviderProps) => {
  const [uiState, setUIState] = useState<UIStates>([]);
  const [loading, setLoading] = useState(false);

  const makeQuery = async (query: string) => {
    setLoading(true);
    const response = await runQuery(query);
    if (response?.ui) {
      setUIState([...uiState, response.ui]);
      setLoading(false);
    } else {
      throw new Error("Error parsing response");
    }
  };
  return (
    <AIUIComponentContext.Provider
      value={{
        makeQuery,
        uiState,
        loading,
      }}
    >
      {children}
    </AIUIComponentContext.Provider>
  );
};

// Custom hook to use the component context
export const useIUI = () => useContext(AIUIComponentContext);

// similar to hyperlinks, but for queries
// Obviously, this breaks http, and a production site would need to
// take into consideration if this should be tied into routing
export const QueryLink = ({ children, query }: QueryLinkProps) => {
  const { makeQuery } = useIUI();
  return (
    <span
      className="text-blue-800 cursor-pointer hover:underline"
      onClick={() => {
        makeQuery(query);
      }}
    >
      {children}
    </span>
  );
};
