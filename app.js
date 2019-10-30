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
            const books = Store.getBooks();
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
        document.querySelector('#title').value='';
        document.querySelector('#isbn').value='';
        document.querySelector('#author').value='';
    }  

    static showAlert(message,className){
        const div = document.createElement('div');
        div.classList=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const form  = document.querySelector('#book-form');
        const container = document.querySelector('.container')

        container.insertBefore(div ,form);
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        },2500)
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove(); 
        }
    }
    
    }
//Store class: Handle Storage
class Store{
    //Get Books from local storage 
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books:[]
        }else{
           books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    //Add book to local storage
    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
    }

    //remove book from local storage
    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
    }
}

//Event : display books
document.addEventListener('DOMContentLoaded',UI.displayBooks);


//Event Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validate
    if(title ==='' || author ==='' || isbn ===''){
       UI.showAlert('Please Fill All Fields', 'danger');
    }else{
     //Instatntiate Book 
    const book = new Book(title,author,isbn);

    //Add Book to Ui
    UI.addBookToList(book);

    //Add Book to storage
    Store.addBook(book);

     //Show success message
    UI.showAlert('Book Added', 'success');

    //Clear Fields
    UI.clearFields()

    }
});

// Event: Remove a Book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    //Remove Book From UI
     UI.deleteBook(e.target);

     //Remove book from local storage
     Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

     //Show success message
     UI.showAlert('Book has been removed', 'success');
});