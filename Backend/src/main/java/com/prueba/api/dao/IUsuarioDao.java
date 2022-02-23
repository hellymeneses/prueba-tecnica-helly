package com.prueba.api.dao;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.prueba.api.entity.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {

	@Query(value = "select * from usuarios where nombre = ?1", nativeQuery = true)
	public Usuario findUserByName(String nombre);

	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE usuarios SET id_rol = ?1 WHERE nombre = ?2", nativeQuery = true)
	public void updateRol(Long id, String nombre);

}
