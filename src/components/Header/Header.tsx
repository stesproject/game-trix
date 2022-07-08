import React, { FC, useEffect } from 'react';
// import {StyledButton} from './Header.style';
import { doc, getDoc, getDocs } from "firebase/firestore";
import { storiesCol, usersCol } from '../../hooks/useDb';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  useEffect(() => {
    getStories();
    getUser();
  }, [])
  
  const getUser = async () => {
    const userDocRef = doc(usersCol, 'UbKALntuhX0OOjJysjG0')
    const userDocSnap = await getDoc(userDocRef);
    const user = userDocSnap.data();
    console.log(user?.username);
  }

  const getStories = async () => {
    const storiesDocs = await getDocs(storiesCol)
    storiesDocs.docs.forEach((storyDoc) => {
      const story = storyDoc.data()
      console.log(story.chapters)
    })
  }

  return (
    <div className="Header" data-testid="Header">
    Header Component
    {/* <StyledButton>Click</StyledButton> */}
  </div>
  )
};

export default Header;
