'use client'
import { fetchCategory } from "@/admin-side/services/category";
import useSWR from "swr";

export const useCategoryData = () =>{


    const url = process.env.NEXT_PUBLIC_BASE_URL + "/category";

    const { data, isLoading, error } = useSWR(url, fetchCategory);

    return { data, isLoading, error }
}