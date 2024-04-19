import { Dispatch, ReactNode, SetStateAction } from "react";

export interface dataType  {
    id : number;
    title: string;
    img: string;
    bedroom: number;
    bathroom: number;
    price: number;
    address: string;
    latitude: number;
    longitude: number;
}



export  type queryType = {
    type: string,
    city: string,
    min: number,
    max: number
  }



  export type modalPropsType = {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    modalIsOpen : boolean,
    children : ReactNode
  }
  