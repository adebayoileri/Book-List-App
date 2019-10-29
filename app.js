//Book Class
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
//UI class
    class UI{
        static displayBooks(){
            const StoredBooks=[
                {
                    title:'Book One',
                    author:'John doe',
                    isbn:'78980'
                },
                {
                    title:'Book Two',
                    author:'Jane doe',
                    isbn:'6787980'
                }
                ,
                {
                    title:'Book Three',
                    author:'Jane doe',
                    isbn:'678777880'
                }
            ];
            const books =StoredBooks;
           books.forEach((book)=>UI.addBookToList(book));
        }
    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML=
        `<tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="btn btn-danger btn-sm delete">X</a></td>
        </tr>`;
        list.appendChild(row);
    }        
    }
//Store class

//Event
document.addEventListener('DOMContentLoaded',UI.displayBooks)