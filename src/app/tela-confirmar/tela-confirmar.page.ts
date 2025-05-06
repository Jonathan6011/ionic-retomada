import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
  standalone : false,
})
export class TelaConfirmarPage implements OnInit {

  diaria:any;
  dia:any;
  res:any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.diaria = this.activatedRoute.snapshot.paramMap.get('diaria');
    this.dia = this.activatedRoute.snapshot.paramMap.get('dia');
    this.res = this.diaria*this.dia
  }
  voltar(){
    this.router.navigateByUrl
    (`/home`);
  }
  confirmar() {
    this.router.navigateByUrl
    (`/tela-final/${this.res}`);
  }
}

