import React, { FC, useEffect } from 'react';
import {StyledButton} from './Header.style';
import { doc, getDoc } from "firebase/firestore";
import { usersCol } from '../../hooks/useDb';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  useEffect(() => {
    readDocument();
  }, [])
  
  const readDocument = async () => {
    const docRef = doc(usersCol);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div className="Header" data-testid="Header">
    Header Component
    {/* <StyledButton>Click</StyledButton> */}
  </div>
  )
};

export default Header;
