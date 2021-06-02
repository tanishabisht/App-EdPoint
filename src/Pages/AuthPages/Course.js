import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc } from "firebase/firestore"; 
import './Info'


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    
  } else {
    
  }
});


function storeUser(){

    const [inputName, name_field] = useState('');
    const [inputSem, sem_field] = useState('');
    const [inputEmail, email_field] = useState('');
    const [inputBio, bio_field] = useState('');
    const [inputCgpa, cgpa_field] = useState('');
    const [inputCer, cer_field] = useState('');



await setDoc(doc(db, "user", uid), {
      name: inputName ,
      sem: inputSem,
      email: inputEmail,
      bio: inputBio,
      cgpa: inputCgpa,
      cer: inputCer
    });

}

function storeCourse(){

    const [inputTitle, variablekanaam] = useState('');
    const [inputTopic, variablekanaam] = useState('');
    const [inputDesc, variablekanaam] = useState('');

   

   
await setDoc(doc(collection(db, "user",uid,"courses")), {
        name: inputTitle ,
        sem: inputTopic,
        email: inputDesc
        
         });
      
      } 





      const exp_div = document.querySelector('#experienceCards')
      db.collection('experiences').get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          exp_div.innerHTML += '<div class="card"><div class="card-body"><h5 class="card-title">' + doc.data().name + '</h5><p class="card-text">' + doc.data().topic + '</p><p class="card-text">' + doc.data().des + '</p><p style="text-align: right;"><a href="' + doc.data().map + '" class="cardBtn">MAP</a><i class="fas fa-heart"></i></p></div></div>';
        })
      })
