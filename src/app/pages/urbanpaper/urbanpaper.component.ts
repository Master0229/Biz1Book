import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-urbanpaper',
  templateUrl: './urbanpaper.component.html',
  styleUrls: ['./urbanpaper.component.scss']
})
export class UrbanpaperComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Back';
  uptable:  any = [];
  
  hide=true;
  editprofile = true;
  url: string | ArrayBuffer;


 
  



  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }


  

  constructor(
    private dialog: MatDialog,
    private auth: AuthService

    


  ) { }

  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

  ngOnInit() {
    this.getuptable();
   }
  
   getuptable(){
    this.auth.GetUPCompanies().subscribe(data => {
      console.log(data);
      this.uptable = data;
      // this.issues = data;
    })
  }

  closealldialog(){
    this.dialog.closeAll()
  }
  
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Back";
    else
      this.buttonName = "Back";
  }

}
