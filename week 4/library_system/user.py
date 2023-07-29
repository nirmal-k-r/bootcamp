class User:

    #constructor for initialising properties
    def __init__(self,nic,full_name,address,dob,phone,email):
        self.nic=nic
        self.full_name=full_name
        self.address=address
        self.dob=dob
        self.phone=phone
        self.email=email  
        self.fines=0
    
    #behavior
    def rent_book(self, books, name):
        for book in books:
            if book.name==name and book.rentedOut==False:
                book.rentedOut=True
                return True
        
        return False
                

    def return_book(self,books,name):
        for book in books:
            if book.name==name and book.rentedOut==True:
                book.rentedOut=False
        
        return False

    def payFines(self,amount):
        if self.fines!=0:
            if (self.fines-amount<=0):
                self.fines=0
                print(f'Returning: {amount-self.fines}')
            
            else:
                self.fines=self.fines-amount
                print(f'Remaining fines: {self.fines}')
        else:
            print('You do not owe the library')


    def __str__(self): #dunder method
        details=(f'Username: {self.full_name}, Fines: {self.fines}')
        return details




# tom=User('12345wwdu882','Tom Shanks','Eau Coulee','12-09-96','51234567','tom@gmail.com')