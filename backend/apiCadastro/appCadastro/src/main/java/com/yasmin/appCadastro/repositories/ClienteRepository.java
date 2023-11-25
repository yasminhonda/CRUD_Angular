package com.yasmin.appCadastro.repositories;

import com.yasmin.appCadastro.dto.ClienteDTO;
import com.yasmin.appCadastro.entities.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//repository herda da jpa
//Jpa<chave, valor>
@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long> {
//jpa ja implementa metodos basicos de crud
}
