import React, {Component} from 'react';
import './AddBook.css';


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            author: ''
         };
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        alert('A new book has been added!');
        event.preventDefault();
        this.props.addNewBook(this.state)
    }

    render() { 
        return ( 
            <div className='row row-space'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input name='title' type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author:
                        <input name='author' type="text" value={this.state.author} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add Book" />
                </form>
            </div>
         );
    }
}
 
export default AddBook;