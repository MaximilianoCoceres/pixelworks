import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators  } from '@angular/forms';
import { ValidarEmail } from '../validators/mail.validator';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario!: FormGroup;
  mobNumberPattern = "^((\\+34-?))?[0-9]{9}$";
  maxCaracteres:number = 200;
  conteoCaracteres:number = 200;

  public archivos:any=[]

constructor(){}

ngOnInit(): void {
  this.formulario = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl ('', [Validators.required, ValidarEmail ]),
    tel:new FormControl ('', [Validators.required,Validators.pattern(this.mobNumberPattern) ]),
    files: new FormControl(''),
    text:new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(200) ])
  });

}

onSubmit(){

  const formValues = this.formulario.value;

  console.log(formValues);
  this.formulario.reset();

}

actualizarCaracteres(event:Event){
  const valorTextarea = (event.target as HTMLTextAreaElement).value;
  this.conteoCaracteres = this.maxCaracteres - valorTextarea.length;
}

capturarFile(event:any):any{
  const archivoCaptura = event.tagret.files[0];
  this.archivos.push(archivoCaptura);

  console.log(this.archivos)
}
}
