import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Users } from 'src/app/models/user.modelo';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {
  usuarioLogueado: Users;
  idUsuario: string;
  id: string;
  email:string;
  password:string; 

  constructor(
    private pedidoService: PedidoService,
    private alertCtrl: AlertController,
    private routes: Router
    ) { }
    
  ngOnInit() {
    console.log("USUARIO LOGUEADO menuuuu");
    console.log(this.pedidoService.usuarioLogeado);
    
    this.idUsuario = this.pedidoService.usuarioLogeado._id.toString();
    console.log('id usurario menu', this.idUsuario);

    this.pedidoService.mostrarUsuario(this.idUsuario).subscribe(
      (data) => {
        console.log('lista usuarios ',data);
        this.id = data.data.rol.toString();
        console.log(this.id);
        
      },
      err => {
        console.log(err);
      }
    );


  }

  menuRegistrarUsuario(){
    console.log("ingresa el menu");
    
    this.routes.navigateByUrl("/registro")
  }

  menuUsuarios(){
    
    this.routes.navigateByUrl("/usuarios")
  }

  recepcion(){
    this.routes.navigateByUrl("/recepcion")
  }



}
