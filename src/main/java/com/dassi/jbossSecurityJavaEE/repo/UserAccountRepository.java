package com.dassi.jbossSecurityJavaEE.repo;

import org.apache.deltaspike.data.api.EntityRepository;
import org.apache.deltaspike.data.api.Query;
import org.apache.deltaspike.data.api.Repository;

import com.dassi.jbossSecurityJavaEE.model.UserAccount;

@Repository(forEntity = UserAccount.class)
public interface UserAccountRepository extends
		EntityRepository<UserAccount, String> {

	@Query(value = "SELECT u FROM UserAccount u WHERE u.login = ?1 AND u.password = ?2")
	public UserAccount authorizeUser(String login, String password);

}
