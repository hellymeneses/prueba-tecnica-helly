package com.prueba.api.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.prueba.api.dao.IUsuarioDao;
import com.prueba.api.entity.Rol;
import com.prueba.api.entity.Usuario;

@Service
public class UsuarioServiceImple implements IUsuarioService {

	@Autowired
	public IUsuarioDao usuarioDao;

	@Override
	public List<Usuario> findAll() {
		return (List<Usuario>) usuarioDao.findAll();
	}

	@Override
	@Transactional
	public Usuario save(Usuario usuario) {
		Rol rolActual = usuario.getRol();
		String usuarioNombre = usuario.getNombre();
		usuario.setRol(null);
		Usuario usuarioCreado = usuarioDao.save(usuario);
		usuarioDao.updateRol(rolActual.getId_rol(), usuarioNombre);
		return usuarioCreado;
	}

	@Override
	public Usuario findById(Long id) {
		return usuarioDao.findById(id).orElse(null);
	}

	@Override
	public void delete(Long id) {
		usuarioDao.deleteById(id);
	}

	@Override
	public Usuario findUserByName(String nombre) {
		return usuarioDao.findUserByName(nombre);
	}

}
