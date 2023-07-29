from book import Book #filename is book, class name to be imported is Book
#from file import book

class Librarian:
    def __init__(self,nic,salary):
        self.nic=nic
        self.salary=salary

    def add_book(self,books,name,numPages,condition):
        new_book=Book(name,numPages,condition) #create ne wbook object
        books.append(new_book) #append the new book object to the books list

    def remove_book(self,books,name):
        for book in books:
            if book.name==name:
                books.remove(book)

    def update_book(self,books,name,condition):
        for book in books:
            if book.name==name:
                book.condition=condition
                