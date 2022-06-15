import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SortType } from "../interfaces";
import { customerFetchData } from "../reducers/CustomerReducer";

export function useTableManage(funcionType: any) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [filterValues, setFilterValue] = useState({columnField: '', id: 0, operatorValue: '', value: ''})
  const [sort, setSort] = useState([{field: '', sort: ''}]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage)

  };
  const handleSort = (type:SortType[]) => {
    setSort(type)

  };
  const handleFilter = ({items}: any) => {
    if(items[0]) {
      setFilterValue(items[0])
    }
  
  }

  useEffect(() => {
    funcionType(dispatch, page, sort, filterValues);
  }, [page, sort, filterValues]);

  return {
      page,
      handlePageChange,
      handleFilter,
      handleSort
  }

    
}