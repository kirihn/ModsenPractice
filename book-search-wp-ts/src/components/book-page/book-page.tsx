import React from 'react'
import { useDispatch } from 'react-redux'
import { SetPage } from '../../store/slices/pageSlice'
import './book-page.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export function BookPage() {
    const dispatch = useDispatch()

    const currentBook = useSelector((state: RootState) => state.currentBook.Book)

    if (!currentBook) {
        return <div>No book selected</div>;
    }
        
    const { volumeInfo } = currentBook;
    const { imageLinks, categories, title, authors, description } = volumeInfo;

    
  
    function ShowBookListPage() {
        dispatch(SetPage('book-list'))
    }

    return (
        <main>
            <div className="bookPageContainer">
                <div className="bookFace">
                <img 
                    src={imageLinks?.thumbnail ? imageLinks.thumbnail : (imageLinks?.smallThumbnail ? imageLinks.smallThumbnail : "./img/EmptyAvatar.jpg")} 
                    alt="BookAvatar" 
                />
                </div>
                <div className="bookinfo">
                    <p className="bookMap" onClick={ShowBookListPage}>
                        {'>'} to book-list
                    </p>
                    <p className="bookMap">{categories ? categories : "No categories"}</p>
                    <h2 className="bookName">
                        {title ? title : "No title"}
                    </h2>
                    <h3 className="authorName">{authors ? authors : "No authors"}</h3>
                    <div className="descriptionContainer">
                        <p className="description">
                        {description ? description : "No description"}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
