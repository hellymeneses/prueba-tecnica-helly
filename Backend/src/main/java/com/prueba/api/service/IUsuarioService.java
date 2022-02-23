package com.prueba.api.service;

import java.util.List;

import com.prueba.api.entity.Usuario;

public interface IUsuarioService {

	public List<Usuario> findAll();

	public Usuario save(Usuario usuario);
	
	public Usuario findById(Long id);
	
	public void delete(Long id);
	
	public Usuario findUserByName(String nombre);
	


}
