import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    background: '#F4FDFB',
    height: '100%'
}

const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 justify-content-center">
                    <h2>Information</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quae provident. In eaque fugit aut numquam dignissimos cumque quisquam nam, ipsa porro reiciendis autem aliquid cupiditate, alias laboriosam qui expedita culpa quo corporis quos blanditiis dolore eveniet temporibus praesentium. Atque.</p>
                </div>
                <div className="col-md-5">
                    <h2>Data</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sed ex quas consequatur voluptatum non tempore quam est quisquam, a animi? Dicta asperiores temporibus voluptates necessitatibus magni, deserunt accusantium provident molestiae? Iure praesentium quia nobis saepe sunt, vero consequuntur voluptatibus, quaerat, officiis quam voluptas doloribus explicabo hic! Corrupti, architecto adipisci!</p>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;