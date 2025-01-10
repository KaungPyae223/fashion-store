import { fetchCustomer } from "@/admin-side/services/customer";

export const useCustomerDetailsData = () => {
    
  const getCustomerDetails = async ({ id }) => {

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const url = baseURL + "/customer-details/" + id;
    const data = await fetchCustomer(url);
    return data;
  };

  return {
    getCustomerDetails
  }

};
