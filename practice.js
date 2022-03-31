
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyD8YRuTvDl2cvt9reyT09UIJtBk8iJluWI",
    authDomain: "kwitterapp-7b38f.firebaseapp.com",
    databaseURL: "https://kwitterapp-7b38f-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-7b38f",
    storageBucket: "kwitterapp-7b38f.appspot.com",
    messagingSenderId: "1026556035893",
    appId: "1:1026556035893:web:1e3fc7cfd365eb06fd427c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name=document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
           purpose: "adding user"
      });
  }