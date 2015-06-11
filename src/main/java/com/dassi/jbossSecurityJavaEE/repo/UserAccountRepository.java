package com.dassi.jbossSecurityJavaEE.repo;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Repository;

import com.dassi.jbossSecurityJavaEE.model.UserAccount;

@Repository
public interface UserAccountRepository extends
		EntityRepository<UserAccount, String> {
}
