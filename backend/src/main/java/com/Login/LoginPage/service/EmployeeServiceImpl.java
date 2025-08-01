package com.Login.LoginPage.service;

import com.Login.LoginPage.model.Employee;
import com.Login.LoginPage.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Sign Up new employee
    public Employee signUp(Employee employee) {
        System.out.println("Signing up employee: " + employee);

        // Optional: Prevent duplicate email signup
        Employee existing = employeeRepository.findByEmpEmailIdAndEmpPassword(employee.getEmpEmailId(), employee.getEmpPassword());
        if (existing != null) {
            throw new RuntimeException("User already exists with same email and password.");
        }

        return employeeRepository.save(employee);
    }

    // Sign In check
    public boolean signIn(String empEmailId, String empPassword) {
        System.out.println("Attempting login for: " + empEmailId);

        Employee employee = employeeRepository.findByEmpEmailIdAndEmpPassword(empEmailId, empPassword);

        if (employee != null && employee.getEmpEmailId().equals(empEmailId)
                && employee.getEmpPassword().equals(empPassword)) {
            System.out.println("Login successful");
            return true;
        }

        System.out.println("Login failed");
        return false;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

}
