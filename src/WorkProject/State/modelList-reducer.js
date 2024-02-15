import { v1 } from 'uuid';
import React from 'react';
import * as XLSX from 'xlsx';

const CHANGEFILTER = 'CHANGE_FILTER';
const CHANGESTATUS = 'CHANGE_STATUS';
const UPLOADMODELLIST = 'UPLOAD_MODEL_LIST';

const initialState = [
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: '0cc2c600-cc08-11ee-99d1-79c70bb691eb',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf10-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf0e-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf0d-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf0c-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf0b-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
  {
    DŁ: 'DŁ',
    GR: 'GR',
    LP: 'LP',
    MATERIAŁ: 'MATERIAŁ',
    MODEL: 'MODEL',
    NAZWA: 'NAZWA',
    PODZESPÓŁ: 'PODZESPÓŁ',
    SZER: 'SZER',
    SZT: 'SZT',
    UWAGI: 'UWAGI',
    filter: 'all',
    id: 'f06bdf0a-cc08-11ee-be68-034c233b5a61',
    isDone: false,
  },
];
export const setModelListTitleAC = (data) => {
  return { type: UPLOADMODELLIST, data };
};
export const changeFilterAC = (filterValue) => {
  return { type: CHANGEFILTER, filterValue };
};
export const changeStatusAC = (id, isDone) => {
  return { type: CHANGESTATUS, id, isDone };
};
export const modelListReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOADMODELLIST: {
      let readedData = XLSX.read(action.data, { type: 'binary' });
      const wsName = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsName];

      /* Convert array to json*/
      const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /*console.log(dataParse);*/
      const keys = dataParse[0];

      const arrayOfObjects = dataParse.map((innerArray) => {
        const outputObject = {};
        keys.forEach((key, index) => {
          outputObject[key] = innerArray[index];
        });

        return outputObject;
      });

      const arrayOf = arrayOfObjects.filter((el) => el.DŁ);
      const stateReady = arrayOf.map((el) => {
        return { ...el, id: v1(), isDone: false, filter: 'all' };
      });
      console.log(stateReady);
      return stateReady;
    }
    case CHANGEFILTER: {
      const stateCopy = [...state];
      return stateCopy.map((tl) => {
        return { ...tl, filter: action.filterValue };
      });
    }
    case CHANGESTATUS: {
      let stateCopy = [...state];
      console.log(stateCopy);
      return stateCopy.map((t) => (t.id === action.id ? { ...t, isDone: !t.isDone } : t));
    }

    default:
      return state;
  }
};
