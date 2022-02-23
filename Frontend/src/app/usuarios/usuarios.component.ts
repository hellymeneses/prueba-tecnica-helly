import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',

})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  nombreDeUsuario!: string;
  usuarioEncontrado!: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe(
      response => this.usuarios = response
    );
  }

  findUserByName() {
    if (this.nombreDeUsuario.length == 0) {
      this.nombreDeUsuario = 'defecto';
    }
    this.usuarioService.getUserByName(this.nombreDeUsuario).subscribe(resp => {
      this.usuarioEncontrado = resp
    });
  }

  delete(usuario: Usuario): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta Seguro',
      text: `Seguro desea eliminar! ${usuario.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar !',
      cancelButtonText: 'No, cancelar !',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.usuarioService.delete(usuario.id_usuario).subscribe(
          resp => {

            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
            swalWithBootstrapButtons.fire(
              'Usuario Eliminado!',
              `Usuario ${usuario.nombre} eliminado con exito `,
              'success'

            )
          }

        )
      }
    }
    )
  }
}
