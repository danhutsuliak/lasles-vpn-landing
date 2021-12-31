import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9lyQ-CY5kwK2gRpAjZkDW_CfER8KnyPE",
  authDomain: "lasles-vpn-landing.firebaseapp.com",
  projectId: "lasles-vpn-landing",
  storageBucket: "lasles-vpn-landing.appspot.com",
  messagingSenderId: "972148479151",
  appId: "1:972148479151:web:1f4a24b1842b82bc45305a",
  measurementId: "G-6B4WWGKWYZ"
};

const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth(app);

export async function getTestimonials(db) {
  const testimonialsCol = collection(db, 'testimonials');
  const testimonialSnapshot = await getDocs(testimonialsCol);
  const testimonialList = testimonialSnapshot.docs.map(doc => doc.data());
  return testimonialList;
}

export async function getFaqs(db) {
  const FaqsCol = collection(db, 'faqs');
  const FaqSnapshot = await getDocs(FaqsCol);
  const FaqList = FaqSnapshot.docs.map(doc => doc.data());
  return FaqList;
}