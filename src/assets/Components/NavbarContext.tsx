import  { createContext, useContext, useState, ReactNode } from "react";




// Define the context type
interface NavbarContextType {
   
    navbar: boolean;
    setNavbar: React.Dispatch<React.SetStateAction<boolean>>;
    rightbar: boolean;
    setRightbar: React.Dispatch<React.SetStateAction<boolean>>;
   
  }
  
  // Create the context
  const NavbarContext = createContext<NavbarContextType | undefined>(undefined);



// Context Provider Component
export const NavbarProvider = ({ children }: { children: ReactNode }) => {

  const [navbar, setNavbar] = useState(false);
  const [rightbar, setRightbar] = useState(false);

 
  return (
    <NavbarContext.Provider value={{  setNavbar, navbar, rightbar, setRightbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom Hook for using the context
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("Navbar Error");
  }
  return context;
};
