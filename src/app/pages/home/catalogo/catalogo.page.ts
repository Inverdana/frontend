import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(private catalogoService: CatalogoService) { }
  catalogo:Observable<any>;
  ngOnInit() {
    this.catalogo=this.catalogoService.getCatalogoArboles();
  }
}
