import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;



export const UserSignUp = async (userData: { email: string; fullname: string; password: string }) => {
    try {
        const resSignUp = await axios.post(`${API_URL}/users/register`, userData);
        return resSignUp.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};

export const UserCategories = async () => {
    try {
        const resUserCat = await axios.get(`${API_URL}/categories/`);
        console.log(resUserCat.data)
        return resUserCat.data;
        
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
  
  export const PostUserInterests = async (categoryIds: number[]) => {
    try {
      const resInterest = await axios.post(`${API_URL}/learners/interests/`, {
        category_id: categoryIds,
      });
      return resInterest.data;
    } catch (error) {
      console.error("Error posting user interests:", error);
      throw error;
    }
  };
  
export const FetchMentorDetail = async (id: string | number) => {
    try {
      const response = await axios.get(`${API_URL}/mentors/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching mentor detail:", error);
      throw error;
    }
  };