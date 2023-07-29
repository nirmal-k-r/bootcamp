class Book:
    def __init__(self, name, numPages,condition):
        self.name=name
        self.numPages=numPages
        self.condition=condition
        self.rentedOut=False

    def __str__(self):
        return (f'Book: {self.name}, Pages: {self.numPages}, Condition: {self.condition}, Rented Out: {self.rentedOut}')
