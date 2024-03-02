import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { baseURL } from '../Api/Url'

const Premium = () => {

    const [price, setPrice] = useState()
    const [Validity, setValidity] = useState()
    const [Premium, setPremium] = useState([])
    console.log(price)
    console.log(Validity)

    useEffect(()=>{
        console.log(Validity,"validity");
    },[Validity])

    useEffect(() => {
      const fetchPremiumPlans = async () => {
        try {
          const response = await axios.get(`${baseURL}account/all-premium/`);
          console.log(response, "Premium Plans");
          setPremium(response.data);
        } catch (error) {
          console.error("Error fetching premium plans:", error);
        }
      };
      fetchPremiumPlans();
    }, []);

    const handleSubmit = async () => {
        console.log("ohrfieurhfierf")
        
      
        try {
            
          const response = await axios.post(`${baseURL}account/add-premium/`, { price, Validity });
      
          if (response.status === 200) {
            toast.success("Premium added");
            navigate('/addpremuim');
          }
        } catch (error) {
          toast.error(error.message);
        }
      };

    // useEffect(() => {
    //     const Premium = async () => {
    //       const response = await axios.get(
    //         "http://127.0.0.1:8000/api/account/add-premium/"
    //       );
    //       console.log(response, ">>>>>>>>>>>>.");
    //       setUsers(response.data);
    //     };
    //     Premium();
    //   }, []);
  return (
    <div className='w-full h-screen '>
        <div className='mx-auto w-[35%] border text-center p-6 rounded-xl bg-gray-100'>
            <h1 className='text-3xl text-cyan-700 text-center mb-6'>Add Package</h1>
            <label className='text-2xl mx-3  ' htmlFor="">Price</label>
            <input value = {price} onChange={(e)=>setPrice(e.target.value)} className='p-2 border rounded-xl mb-6' type="number" name="" id="" placeholder='premium amount' />
            <br />
            <label className='text-2xl mx-3   ' htmlFor="">Validity</label>
            <select onChange={(e)=>setValidity(e.target.value)} className='border p-2 w-[35%] rounded-xl mb-6'  name="" id="">
                <option selected disabled >Please select option</option>
                <option value="6">6 months</option>
                <option value="12">1 year</option>
                <option value="24">2 year</option>
                
            </select>
            <br />
            <button onClick={handleSubmit} className='p-3 bg-cyan-700 rounded-xl w-[20%] text-white'>Add</button>

        </div>
        <div className="h-fit w-fit mx-auto border border-stone-300 rounded-2xl flex px-5 mt-4">
          <div className="overflow-x-auto  ">
            <table className="table border-spacing-4 table-fixed   ">
              {/* head */}
              <thead>

                <tr >
                  <th>Sl No</th>
                  {/* <th>ID</th> */}
                  <th>Premium</th>
                  <th>Validity</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {Premium?.map((item,index)=>{

<tr>
<th></th>
<td>{index}</td>
<td>
  <div className="flex items-center space-x-3">
    <div>
      <div  className="font-bold">{item?.price}</div>
    </div>
  </div>
</td>
<td>
  <div className="flex items-center space-x-3">
    <div>
      <div className="font-bold">{item?.Validity}</div>
    </div>
  </div>
</td>
<td>
  {/* <div className="flex items-center space-x-3">
    <div>
      <div className="font-bold">
        <button className='bg-green-300 p-3 rounded-xl'>Edit</button></div>
    </div>
    <div>
    <button className='bg-red-500 p-3 rounded-xl'>Delete</button>
    </div>
  </div> */}
</td>





</tr>
                })
              }

                
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
        
    </div>
  )
}

export default Premium