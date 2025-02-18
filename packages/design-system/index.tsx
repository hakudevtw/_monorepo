import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "./providers/theme";
import { Toaster } from "./components/ui/sonner";

type DesignSystemProviderProperties = ThemeProviderProps;

export const DesignSystemProvider = ({
  children,
  ...properties
}: DesignSystemProviderProperties) => (
  <ThemeProvider {...properties}>
    {children}
    <Toaster />
  </ThemeProvider>
);
