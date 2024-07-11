import axios from "axios";
import FoundState from "../types/searchInfo.dto";
import { ApiKey, BaseUrl, BooksCount } from '../../config'

export async function GetResponseFromBookApi(SearchParam: FoundState){
    const response = await axios.get(
        BaseUrl,
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
    return response.data
}