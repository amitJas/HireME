import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class FirebaseService {

  constructor(private db: AngularFirestore) { }

  getUserData() {
    var usersRef = this.db.collection("Users").doc('User1').get().subscribe(function(result) {
      console.log(result.data())
    })
  }

  setUserData(userName:string, userEmail: string,userNum:number) {
    console.log('in setUsersData');
    console.log(userName,userEmail,userNum);
    this.db.collection('Users').add({
      name: userName,
      // last: 'mar',
      // age: 20
      email:userEmail,
      employeeNumber:userNum
    })
  }

}