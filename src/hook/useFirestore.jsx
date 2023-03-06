import { useState, useEffect } from "react";
import { db } from "/src/db/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addDocument = async (documentData) => {
    try {
      if (!navigator.onLine) {
        throw new Error(
          "No internet connection. Form would be sub,itted when internet returns"
        );
      }

      setLoading(true);
      const newDocRef = await addDoc(
        collection(db, collectionName),
        documentData
      );
      setData((prevData) => [
        ...prevData,
        { id: newDocRef.id, ...documentData },
      ]);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, addDocument };
};

export default useFirestore;
