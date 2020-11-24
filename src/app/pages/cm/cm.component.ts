import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth.service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-cm',
  templateUrl: './cm.component.html',
  styleUrls: ['./cm.component.scss']
})
export class CmComponent{

  public show:boolean = false;
  public buttonName:any = 'Back';
  Companies: any = [];
  
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
    private auth: AuthService,
    // private spinnerService: Ng4LoadingSpinnerService
    


  ) { }

  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
  openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }

  ngOnInit() { 
    // this.spinnerService.show();
    this.getcompanies();



  }
getcompanies(){
    this.auth.GetCompany().subscribe(data => {
      console.log(data);
      this.Companies = data;
      //this.spinnerService.hide()
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
