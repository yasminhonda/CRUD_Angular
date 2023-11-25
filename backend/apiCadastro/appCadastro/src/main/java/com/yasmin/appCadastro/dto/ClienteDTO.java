package com.yasmin.appCadastro.dto;

import com.yasmin.appCadastro.entities.Cliente;

public class ClienteDTO {

    private Long id;
    private String nome;

    public ClienteDTO() {

    }

    public ClienteDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    //cliente para DTO
    public ClienteDTO(Cliente cliente) {
        this.id = cliente.getId();
        this.nome = cliente.getNome();
    }

    public Long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
