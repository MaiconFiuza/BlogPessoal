package com.maicon.fiuza.fifiuza.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "tb_usuario")
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull
	@Size(min = 2)
	private String nome;
	
	@OneToMany(mappedBy = "usuario",cascade = CascadeType.ALL)//Fala se um usuário for apagado as postagem deles tbém serão por causa do cascada type all é realamnete um efeito de cascada apricado a tudo(all)
	@JsonIgnoreProperties("usuario")
	public List<Postagem> postagem;
	
}
