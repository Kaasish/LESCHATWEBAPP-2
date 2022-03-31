
//ADD YOUR FIREBASE LINKS HERE
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
    const app = initializeApp(firebaseConfig);
    

username=localStorage.getItem("user_name");
document.getElementById("user_name.").innerHTML="welcome -"+username+"!";
getData();
function addRoom()
{
      Room_names = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_names).update({
      });

      localStorage.setItem("Room_names", Room_names)

      window.location = "kwiiter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwiiter_page.html";
}
