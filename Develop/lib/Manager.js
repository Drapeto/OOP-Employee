// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email,)
        this.number = number;
    }
    getRole() {
        return "Manager"
    }
}