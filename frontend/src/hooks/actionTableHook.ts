import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Data } from '../interfaces';
import { EndpointRequest } from '../utils/fetch';
import * as action from '../actions/actions';

export default function useActionHook(url: string) {
  const { crudReducer }: any = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data } = crudReducer;
  
  useEffect(() => {
    console.log(data)
    new EndpointRequest()
      .get(url)
      .then((data) => data.json())
      .then((res) => dispatch(action.getData(res)));
  }, []);

  const handleEdit = (event: any, rowValues: any) => {
    console.log(rowValues.row);
  };
  return {
    data,
    handleEdit
  };
}
