import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-final',
  templateUrl: './tela-final.page.html',
  styleUrls: ['./tela-final.page.scss'],
  standalone : false,
})
export class TelaFinalPage implements OnInit {
  res:any;

  constructor(public router:Router,public activatedRoute:ActivatedRoute) {

   }

  ngOnInit() {
    this.res = this.activatedRoute.snapshot.paramMap.get('res')
  }
  voltar(){
    this.router.navigateByUrl
    (`/home`);
  }


}
