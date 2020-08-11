
import { useEffect, useContext } from 'react';
import { TitleContext, defaultTitle } from './providers/TitleProvider';

export interface TitleProps {
    value: string;
}

const Title: React.FC<TitleProps> = ({ children, value }) => {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle(value);
        return () => {
            setTitle(defaultTitle);
        }
    }, [value])

    return (
      <>
        {children}
      </>
    );
}

export default Title;