'use client'

import React, { useState, useEffect } from 'react';

import loader from "../api/dataLoader";
import BTN from "../components/btn";
import Card from '../components/card';

const ListPage: React.FC = () => {
    const [data, setData] = useState<HelloWorld | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            const result = await loader();
            setData(result);
        }
        fetchData();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
                <h1>Hello List</h1>
                <BTN hrefParam="/">[Back to home]</BTN>
            </div>
            <div>{data ? data.hello : 'Loading...'}</div>
            <Card />
        </div>
    )
}

export default ListPage;