const { initializeApp } = require('firebase/app');
const { 
  getStorage, 
  ref, 
  uploadBytes,
  getDownloadURL
} = require('firebase/storage');
const { config } = require('../../config/config');
const { v4: uuidv4 } = require('uuid');

const firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messagingSenderId: config.firebase.messagingSenderId,
  appId: config.firebase.appId
};

initializeApp(firebaseConfig);

const uploadFile = async(file) => {
    try{
        const storage = getStorage();
        const metadata = {
          contentType: file.mimetype,
        };
        const name = `${uuidv4()}_${file.originalname}`;
        const storageRef = ref(storage, `images/${name}`);
        await uploadBytes(storageRef, file.buffer, metadata)
        const url = await getDownloadURL(storageRef);
    
        return url;
    }catch(error){
      return {
          error: true,
          message: error.message
      }
    }
}

module.exports = {
    uploadFile
}