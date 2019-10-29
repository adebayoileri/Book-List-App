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
    static clearFields(){
        document.querySelector('#title').value=' ';
        document.querySelector('#isbn').value=' ';
        document.querySelector('#author').value=' ';
    }  
    
    static deleteBooks(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove(); 
        }
    }
    
    }
//Store class: Handle Storage

//Event : display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);


//Event Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    const book = new Book(title,author,isbn);

    UI.addBookToList(book);

    //Clear Fields
    UI.clearFields()

});

// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
     
})