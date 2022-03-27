import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [{ id: 1, name: "Laptop Pro", price: 12500 },
    { id: 2, name: "laptop Crow", price: 123423 },
    { id: 3, name: "Laptop Grow", price: 214324 }
    ]

    return (
        <div>
            <h2>This is CardGroup</h2>
            <div className="card-group">
                {
                    products.map(product => <Card
                        key={product.id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;