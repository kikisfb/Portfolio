import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: any[]) => { 
    return twMerge(clsx(inputs)); /* to be able to use multiple classes and styles at the same time at other places*/
}