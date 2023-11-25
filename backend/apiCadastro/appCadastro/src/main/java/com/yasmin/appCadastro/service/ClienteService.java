package com.yasmin.appCadastro.service;

import com.yasmin.appCadastro.dto.ClienteDTO;
import com.yasmin.appCadastro.entities.Cliente;
import com.yasmin.appCadastro.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service //avisa a Spring q é um service
public class ClienteService {

    @Autowired //ter acesso a outra classe
    ClienteRepository repository;

    public void createCliente(ClienteDTO dto) {
        Cliente cliente = new Cliente(null ,dto.getNome());
        repository.save(cliente); //salva no repository
    }

    public void deleteCliente(Long id) {
        Cliente cliente = repository.findById(id).get();
        repository.delete(cliente);
    }

    public void updateCliente(ClienteDTO dto) {
        Cliente cliente = repository.findById(dto.getId()).get();
        cliente.setNome(dto.getNome());
        repository.save(cliente);
    }

    public List<ClienteDTO> listarCliente() {
        List<Cliente> list = repository.findAll();

        //tranforma lista em coleçao para tratar o dado
        return list.stream().map(c -> {
            try {
                return new ClienteDTO(c);
            }
            catch(ParseException ex) {
                ex.printStackTrace();
            }
            return null;
        }).collect(Collectors.toList());
    }
}
