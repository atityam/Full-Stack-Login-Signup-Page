package com.Login.LoginPage.repository;

import com.Login.LoginPage.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, Integer> {

    // Custom Method

    Employee findByEmpEmailIdAndEmpPassword(String empEmailId, String empPassword);

}
