import axios from "axios";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import FoundState from "../dto/searchInfo.dto";

export async function GetResponseFromBookApi(SearchParam: FoundState){
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const ApiKey = 'AIzaSyBRgz0ELM__gIfm5fbGPcexaOO5P0Kf-wM';
    const BooksCount = 30;
    // const category = useSelector((state: RootState) => state.found.Categories);
    // const filter = useSelector((state: RootState) => state.found.Filter);
    // const search = useSelector((state: RootState) => state.found.Search);
    // const startIndex = useSelector((state: RootState) => state.found.StartIndex)
    let response = await axios.get(
        baseUrl,
        {
            params: {
                q: SearchParam.Categories === 'all' ? SearchParam.Search : `${SearchParam.Search}+subject:${SearchParam.Categories}`,
                orderBy: SearchParam.Filter,
                startIndex: SearchParam.StartIndex,
                maxResults: BooksCount,
                key: ApiKey
            }
        }
    )
    return response
}