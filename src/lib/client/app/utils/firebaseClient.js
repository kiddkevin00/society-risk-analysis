import firebaseClient from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyC33sEsvTjT5s8Ah7nHdnV206B0ZxFxmrw',
  authDomain: 'society-risk-analysis-319fd.firebaseapp.com',
  databaseURL: 'https://society-risk-analysis-319fd.firebaseio.com',
  projectId: 'society-risk-analysis-319fd',
  storageBucket: 'society-risk-analysis-319fd.appspot.com',
  messagingSenderId: '965949214544',
};

firebaseClient.initializeApp(config);

export { firebaseClient as default };
