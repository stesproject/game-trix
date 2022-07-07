// Get the imports
import { initializeApp } from "firebase/app";
import { getFirestore, CollectionReference, collection, DocumentData } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// Import all your model types
import { User } from "../types/user.type";
import { Story } from "../types/story.type";

// Init the firebase app
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDrjP39ddzESjbk3RO1dfG18LH3IwmGpGA",
  authDomain: "game-trix.firebaseapp.com",
  projectId: "game-trix",
  storageBucket: "game-trix.appspot.com",
  messagingSenderId: "633309763697",
  appId: "1:633309763697:web:f148df8c3fd4ecd6afa3d0",
  measurementId: "G-67NLZB0YZK",
});

// Export firestore incase we need to access it directly
export const firestore = getFirestore();
// const analytics = getAnalytics(firebaseApp);

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(firestore, collectionName) as CollectionReference<T>;
};

// export all your collections
export const usersCol = createCollection<User>("users");
export const storiesCol = createCollection<Story>("stories");
