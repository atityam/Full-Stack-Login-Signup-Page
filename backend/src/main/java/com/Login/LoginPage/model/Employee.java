package com.Login.LoginPage.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document
public class Employee {

    @Id
    private String id;  // changed from int empId

    private String empName;
    private double empSalary; // Optional in signup (can be skipped in form)
    private String empEmailId;
    private String empPassword;
}
