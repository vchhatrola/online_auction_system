
import axios from 'axios';
import React, {  useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateAuction = () => {
    const { id } = useParams(); 
    // const [product, setProduct] = useState(null); 
    const { register, handleSubmit, formState: { errors },setValue,getValues } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/getAuction/${id}`)
          .then(response => {
            console.log(response.data, "response auction detail");
            if (response.data) {
                const productData = response.data.data;
                    // Set form values using setValue
                    //console.log(productData.auctionDate,"hii")
                    setValue("auctionDate", formatDate(productData.auctionDate));
                    // setValue("auctionDate", formatDate(productData.auctionDate));
                    Object.keys(productData).forEach(key => {
                        setValue(key, productData[key]);
                    });
            //   setProduct(response.data.data);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };
    
    console.log(getValues(),"get value",getValues("auctionDate"))
      const onSubmit = (data) => {
        console.log(data, "data");
        data._id=id
        axios.post(`http://localhost:3000/api/updateAuction/${id}`, data)

        .then(response => {
            toast(response.data.message)
            if (response.data.status) {
                Navigate('/productList')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        
      <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="text-center mb-4">Update Product Detail</h2>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" id="title" placeholder="title"
                                        {...register("title", { required: true })} />
                                    {errors.title && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="price">price </label>
                                    <input type="text" className="form-control" id="price"  placeholder="Enter Price"
                                        {...register("price", { required: true })} />
                                    {errors.price && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="model">Car Model</label>
                                    <input type="text" className="form-control" id="model" placeholder="model"
                                        {...register("model", { required: true })} />
                                    {errors.model && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="condition"> Condition</label>
                                    <input type="text" className="form-control" id="condition" placeholder="condition"
                                        {...register("condition", { required: true })} />
                                    {errors.condition && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="auctionDate"> auctionDate</label>
                                    <input type="text" className="form-control" id="auctionDate" placeholder="auctionDate"
                                        {...register("auctionDate", { required: true })} />
                                    {errors.auctionDate && <span className="text-danger">This field is required</span>}
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateAuction;
