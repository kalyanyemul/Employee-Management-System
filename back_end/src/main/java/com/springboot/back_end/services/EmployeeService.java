package com.springboot.back_end.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.back_end.exception.ResourceNotFoundException;
import com.springboot.back_end.model.Employee;
import com.springboot.back_end.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository empRepo;

    public List<Employee> getAllEmployee() {
        return empRepo.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return empRepo.findById(id);
    }

    public Employee createEmployee(Employee emp) {
        return empRepo.save(emp);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee temp = empRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee Does Not Exist With id : " + id));

        temp.setFirstName(employee.getFirstName());
        temp.setLastName(employee.getLastName());
        temp.setEmailId(employee.getEmailId());
        temp.setMobNo(employee.getMobNo());

        Employee temp2 = empRepo.save(temp);

        return temp2;
    }

    public void deleteEmployee(Employee emp) {
        empRepo.delete(emp);
    }

}
