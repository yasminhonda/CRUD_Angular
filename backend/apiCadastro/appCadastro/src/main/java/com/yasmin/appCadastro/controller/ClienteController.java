package com.yasmin.appCadastro.controller;

import com.yasmin.appCadastro.dto.ClienteDTO;
import com.yasmin.appCadastro.entities.Cliente;
import com.yasmin.appCadastro.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/cliente") //url endpoint
public class ClienteController {
    @Autowired
    ClienteService service;

    //define metodo do endpoint
    @GetMapping
    public ResponseEntity<List<ClienteDTO>> findAll() {
        return ResponseEntity.ok().body(service.listarCliente());
    };

    @PostMapping
    public void createCliente(@RequestBody ClienteDTO dto) {//var dto vai ser fornecido pelo body front
        service.createCliente(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteCliente(@PathVariable Long id){
        service.deleteCliente(id);
    }

    @PutMapping
    public void editCliente(@RequestBody ClienteDTO dto) {
        service.updateCliente(dto);
    }
}
