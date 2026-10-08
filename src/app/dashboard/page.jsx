
import React from 'react';
import Counter from '../components/Counter';

const DashbordPage = () => {

   console.log('Dashboard page rendered');

    return (
        <div>
            <dev>
                <h2>Dashboard page</h2>

        
        <Counter></Counter>

                <ul>
                    <li>Dashboard item 1</li>
                    <li>Dashboard item 2</li>
                    <li>Dashboard item 3</li>
                </ul>
            </dev>
        </div>
    );
};

export default DashbordPage;