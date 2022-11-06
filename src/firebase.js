// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCxIUc8tYjDQwUhpTDoXhvEjMYYaWNtwlc',
	authDomain: 'random-user-b9800.firebaseapp.com',
	projectId: 'random-user-b9800',
	storageBucket: 'random-user-b9800.appspot.com',
	messagingSenderId: '405385748803',
	appId: '1:405385748803:web:c84a6a2eb65f72e2000ff6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
