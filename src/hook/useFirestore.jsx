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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName]);

  const addDocument = async (documentData) => {
    try {
      const newDocRef = await addDoc(
        collection(db, collectionName),
        documentData
      );
      setData((prevData) => [
        ...prevData,
        { id: newDocRef.id, ...documentData },
      ]);
    } catch (error) {
      setError(error);
    }
  };

  const updateDocument = async (documentId, updatedData) => {
    try {
      const documentRef = doc(db, collectionName, documentId);
      await updateDoc(documentRef, updatedData);
      setData((prevData) => {
        const updatedIndex = prevData.findIndex((doc) => doc.id === documentId);
        const updatedDoc = { ...prevData[updatedIndex], ...updatedData };
        const newData = [...prevData];
        newData[updatedIndex] = updatedDoc;
        return newData;
      });
    } catch (error) {
      setError(error);
    }
  };

  const deleteDocument = async (documentId) => {
    try {
      const documentRef = doc(db, collectionName, documentId);
      await deleteDoc(documentRef);
      setData((prevData) => prevData.filter((doc) => doc.id !== documentId));
    } catch (error) {
      setError(error);
    }
  };

  return { data, loading, error, addDocument, updateDocument, deleteDocument };
};

export default useFirestore;
