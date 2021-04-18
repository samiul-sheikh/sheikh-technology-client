import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AdminPanel = () => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        const adminData = {
            name: data.name,
            email: data.email
        };

        const url = `https://sb-technologies.herokuapp.com/addAdmin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
            .then(res => console.log('server side res ', res))
    };

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: 'absolute', right: 0, backgroundColor: '#F4FDFB' }}>
                <h5 className="text-center">Add an Admin</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-3">
                        <label for="exampleInputName" class="form-label">Your Name</label>
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Enter Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail" class="form-label">Your Email</label>
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Enter Your E-mail Address" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group d-grid mx-auto">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdminPanel;