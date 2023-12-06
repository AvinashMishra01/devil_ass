import { Component, EventEmitter, Output } from '@angular/core';

interface Email {
  id: number;
  subjects: string;
}

interface Category {
  id: number;
  catName: string;
}

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent {
  // @Output() formSubmitted = new EventEmitter<boolean>();

  //   name="";
  //   gender="";
  //   email1="";
  //   category=""
  //   selectedEmailIs=[]
  //   emails=[
  //     {id:1, subjects:"Java"},
  //     {id:2, subjects:"C#"},
  //     {id:3, subjects:"JavaScript"},
  //     {id:4, subjects:"C"}
  //   ]
  //   categorys=[
  //     {id:1, catName:"Cate-1"},
  //     {id:2, catName:"Cate-2"},
  //     {id:3, catName:"Cate-3"},
  //     {id:4, catName:"Cate-4"},
  //   ]

  

  // // Define the submitForm method
  // submitForm() {
  //    console.log("name is ", this.name, "email", this.email1, "gender", this.gender, );
  //    console.log("Selected", this.selectedEmailIs, this.category)
  // }



  name: string = '';
  email1: string = '';
  gender: string = '';
  selectedEmailIs: boolean[] = [];
  category: number = 0; // Default value for category
  emails: Email[] = [
    { id: 1, subjects: 'Java' },
    { id: 2, subjects: 'C#' },
    { id: 3, subjects: 'JavaScript' },
    { id: 4, subjects: 'C' }
  ];
  categorys: Category[] = [
    { id: 1, catName: 'Cate-1' },
    { id: 2, catName: 'Cate-2' },
    { id: 3, catName: 'Cate-3' },
    { id: 4, catName: 'Cate-4' }
  ];
  users: any[] = [];
  isEditMode = false;
  editUserId: number | null = null;

  submitForm() {
    if (this.isEditMode && this.editUserId !== null) {
      // Update existing user
      this.users[this.editUserId] = { ...this.getUserData() };
    } else {
      // Add new user
      this.users.push({ ...this.getUserData(), id: this.users.length + 1 });
    }

    // Clear the form
    this.resetForm();
  }

  editUser(user: any) {
    // Set the current user for editing
    this.isEditMode = true;
    this.editUserId = user.id - 1; // Assuming user IDs are 1-based
    this.populateForm(user);
  }

  deleteUser(id: number) {
    // Delete user by ID
    this.users = this.users.filter((user) => user.id !== id);
  }

  private resetForm() {
    this.isEditMode = false;
    this.editUserId = null;
    this.name = '';
    this.email1 = '';
    this.gender = '';
    this.selectedEmailIs = new Array(this.emails.length).fill(false);
    this.category = 0;
  }

  private populateForm(user: any) {
    this.name = user.name;
    this.email1 = user.email1;
    this.gender = user.gender;
    this.selectedEmailIs = this.emails.map((email) => user.emails.includes(email.subjects));
    this.category = user.category;
  }

  private getUserData() {
    return {
      name: this.name,
      email1: this.email1,
      gender: this.gender,
      emails: this.emails.filter((email, i) => this.selectedEmailIs[i]).map((email) => email.subjects),
      category: this.category
    };
  }

}
