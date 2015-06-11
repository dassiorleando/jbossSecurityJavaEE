package com.dassi.jbossSecurityJavaEE.rest;

import java.util.List;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.inject.Inject;

import com.dassi.jbossSecurityJavaEE.model.UserAccount;
import com.dassi.jbossSecurityJavaEE.repo.UserAccountRepository;

/**
 * Session Bean implementation class UserAccountEjb
 */
@Stateless
@LocalBean
public class UserAccountEjb {

	@Inject
	UserAccountRepository repository;

	// @PersistenceContext(unitName = "jbossSecurityJavaEE")
	// private EntityManager em;

	public UserAccount create(UserAccount entity) {
		return repository.save(entity);
	}

	public UserAccount deleteById(String id) {
		UserAccount entity = repository.findBy(id);
		if (entity != null) {
			repository.remove(entity);
		}
		return entity;
	}

	public UserAccount update(UserAccount entity) {
		return repository.save(entity);
	}

	public UserAccount findById(String id) {
		return repository.findBy(id);
	}

	public List<UserAccount> listAll(int start, int max) {
		return repository.findAll(start, max);
	}

	public Long count() {
		return repository.count();
	}
}
