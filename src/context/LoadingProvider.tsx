import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

// Loading screen completely removed — instantly start animations
export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading] = useState(false);
  const [loading, setLoading] = useState(0);

  const setIsLoading = (_state: boolean) => {};

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    // Always auto-start animations immediately
    import("../components/utils/initialFX").then((module) => {
      if (module.initialFX) {
        setTimeout(() => {
          module.initialFX();
        }, 100);
      }
    });
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
