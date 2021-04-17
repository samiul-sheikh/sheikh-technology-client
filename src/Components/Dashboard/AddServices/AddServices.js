import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-center">add your service here</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputService" class="form-label">Service Title</label>
                        <input type="text" ref={register({ required: true })} name="service" placeholder="Enter Title" className="form-control" />
                        {errors.service && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputService" class="form-label">Service Description</label>
                        <input type="text" ref={register({ required: true })} name="description" placeholder="Enter Description" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPrice" class="form-label">Service Price</label>
                        <input type="text" ref={register({ required: true })} name="price" placeholder="Enter Price" className="form-control" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputImage" class="form-label">Service Image</label>
                        <input type="file" ref={register({ required: true })} name="image" placeholder="Upload an Image" className="form-control" />
                        {errors.image && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddServices;