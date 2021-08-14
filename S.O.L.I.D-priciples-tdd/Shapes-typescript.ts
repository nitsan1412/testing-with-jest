

// I - Interface Segregation Principle

// I don't have to implement what I don't need!!!


interface ShapeI {
    area():Function;

    volume():Function; 
}


class VolumeCalculator implements ShapeI{


    volume(){

    }
}


// D - Dependency Inversion Principle

interface ManageShapeInterface
{
    calculate():Function;
}


class Square implements ShapeI, ManageShapeInterface{

    public area(){
        // find area of square
    }

    public calculate(){
        return this.area()
    }
}


class Cubic implements ShapeI, ManageShapeInterface{
    public function area(){
        // calculate the surface area of the Cubic
    }

    public volume(){
        // calculate the volume of the Cubic
    }

    public calculate(){
        // calculate the volume by area fo the Cubic
    }

}



// Database MYSQL / MSSQL / POSTGRES / ORACLE


class MySQLConnection{

    public connect(){
        //handle database connection
        return 'Database Connection'
    }

}



class MSSQLConnection{

    public connect(){
        //handle database connection
        return 'Database Connection'
    }

}


class PasswordChecker {
    private dbConnection:any

    public constructor(dbConnection:MSSQLConnection){
        this.dbConnection = dbConnection
    }

    checkPassword():boolean{
        return false
    }
}