// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "---",
    authDomain: "--",
    projectId: "---",
    storageBucket: "---",
    messagingSenderId: "---",
    appId: "---"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.firestore().collection('messages').doc();
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    let message = {
    name : getInputVal('first-name'),
    company : getInputVal('second-name'),
    email :getInputVal('email'),
    phone : getInputVal('phone'),
    message: getInputVal('school'),
    country:getInputVal('country'),
    grade : getInputVal('grade'),
    mentor: getInputVal('mentor'),
    pathway: getInputVal('pathway'),
    mentorLook: getInputVal('mentor-look'),
    video : getInputVal('vid'),
    gender : getInputVal('gender'),
    comments: getInputVal('comments')
    }
    
  
    // Save message
    saveMessage(message);
  
    // Clear form
    // document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(message){
    messagesRef.set(message);
  }