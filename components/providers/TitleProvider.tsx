
import { createContext } from 'react';
import { useState } from 'react';

export const defaultTitle = "Portfolio Website";

export const TitleContext = createContext(undefined);

const TitleProvider: React.FC = ({ children }) => {
    const [title, setTitle] = useState(defaultTitle);

    return (
      <TitleContext.Provider value={{ title, setTitle }}>
          {children}
      </TitleContext.Provider>
    );
}

export default TitleProvider;