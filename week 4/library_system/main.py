from book import Book
from librarian import Librarian
from user import User

books=[] #list of objects

librarian_1=Librarian('13eeufijck',25000)
librarian_2=Librarian('wdwqd3jck',22500)

librarian_1.add_book(books,'Harry potter 1',300,'new')
librarian_2.add_book(books,'Harry potter 2',350,'new')
librarian_1.add_book(books,'Harry potter 3',400,'new')
librarian_1.add_book(books,'Harry potter 4',450,'new')
librarian_1.add_book(books,'Science Handbook',450,'used')

paul=User('16e3dfcewdf','Paul Smith', 'curepipe','19 aug 2000', '25812739281','test@1.com')

paul.rent_book(books,'Harry potter 1')

for book in books:
    print(str(book))