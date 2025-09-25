// src/components/ProductsList.jsx
import React from 'react';
import { productsListData } from '../data/mockData';
import { FiSmartphone, FiWatch } from 'react-icons/fi';

const ProductsList = () => {
    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md h-full">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Products</h3>
            <div className="space-y-4">
                {productsListData.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                                {index === 0 ? <FiSmartphone className="text-slate-800 dark:text-white" /> : <FiWatch className="text-slate-800 dark:text-white" />}
                            </div>
                            <div>
                                <p className="font-medium text-slate-800 dark:text-white">{product.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{product.stock}</p>
                            </div>
                        </div>
                        <p className="font-semibold text-slate-800 dark:text-white">${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductsList;