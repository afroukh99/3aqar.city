import { useEffect, useState } from "react"
import { dataType } from "../types/types"
import axios from "axios"




export const  useFetch = (url : string) => {
    const [posts, setPosts] = useState<dataType[]>([])

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response: any = await axios.get(url)
          setPosts(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchPosts()
    }, [])
    return posts
} 