import { RootState } from "../store/store";
import { useSelector } from "react-redux";

function GetUrl(): string{
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const categories = useSelector((state: RootState) => state.found.Categories);
    const filter = useSelector((state: RootState) => state.found.Filter);
    const Search = useSelector((state: RootState) => state.found.Search);


    return baseUrl
}