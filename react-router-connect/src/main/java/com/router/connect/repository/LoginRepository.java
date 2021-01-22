package com.router.connect.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.router.connect.entity.LoginEntity;

public interface LoginRepository extends JpaRepository<LoginEntity, Long> {

	LoginEntity findByEmailIdAndPassword(String emailId, String password);

}
