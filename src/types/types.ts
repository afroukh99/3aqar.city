import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Property {
  streetWidth: number;
  area: number;
  familiesOrSingles: boolean;
  bedrooms: number;
  livingRooms: number;
  bathrooms: number;
  floor: number;
  propertyAge: number;
  elevator: boolean;
  kitchen: boolean;
  dateAdded: string; 
  views: number;
}

export interface userType {
  username :string,
  fullName : string,
  email :string,
  password :string,
  confirmPass ?: string,
  phone : string,
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




  export type RegisterInputsType = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
    phone: string ,
}

export type LoginInputsType = {
  username: string,
  password: string,
}
