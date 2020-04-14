package com.mkpolo.core.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mkpolo.core.modelo.Persona;

@Repository
public interface Ipersona extends CrudRepository<Persona, Integer>{

}
