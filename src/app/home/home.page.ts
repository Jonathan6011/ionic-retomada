import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  diaria='';
  dia='';
  res = 0

  constructor(public router: Router) {

  }

  abrirTela(){
    this.router.navigateByUrl
    (`/tela-confirmar/${this.diaria}/${this.dia}`);
  }


}

