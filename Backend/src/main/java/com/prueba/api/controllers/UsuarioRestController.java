package com.prueba.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prueba.api.entity.Usuario;
import com.prueba.api.service.IUsuarioService;

@RestController
@CrossOrigin(origins = { "*" })
@RequestMapping("/api")
public class UsuarioRestController {

	@Autowired
	public IUsuarioService usuarioService;

	@GetMapping("/usuarios")
	public List<Usuario> obtenerUsuarios() {
		return usuarioService.findAll();
	}

	@PostMapping("/usuarios")
	public Usuario guardarUsuario(@RequestBody Usuario usuario) {
		return usuarioService.save(usuario);
	}

	@GetMapping("/usuarios/{id}")
	public Usuario buscarId(@PathVariable Long id) {
		return usuarioService.findById(id);
	}

	@GetMapping("/usuarios/nombre/{nombre}")
	public Usuario buscarUsuarioPorNombre(@PathVariable String nombre) {
		Usuario usuarioEncontrado = usuarioService.findUserByName(nombre);
		return usuarioEncontrado;
	}

	@DeleteMapping("/usuarios/{id}")
	public void eliminarUsuario(@PathVariable Long id) {
		usuarioService.delete(id);
	}

	@PutMapping("/usuarios/{id}")
	public Usuario actualizarUsuario(@RequestBody Usuario usuarioArgumento, @PathVariable Long id) {
		Usuario usuarioActual = usuarioService.findById(id);

		usuarioActual.setNombre(usuarioArgumento.getNombre());
		usuarioActual.setActivo(usuarioArgumento.getActivo());

		return usuarioService.save(usuarioActual);
	}
}
