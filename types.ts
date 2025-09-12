export interface ReactChildren {
  children: React.ReactNode;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: ()=>void
}