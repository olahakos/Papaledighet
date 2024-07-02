"use client";

import React, { useState, useEffect } from "react";

import loader from "../../app/api/dataLoader";
import BTN from "../../components/btn";
import Card from "../../components/card";
import { getBoard } from "@/utils/gameLogic";

const ListPage: React.FC = () => {
    const [data, setData] = useState<string[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/list-files");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                const board = getBoard(data.files, 12);
                setData(board);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-md items-center justify-between font-mono text-sm lg:flex">
                <h1>Hello List</h1>
                <BTN hrefParam="/">[Back to home]</BTN>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map((src) => (
                    <Card src={src} />
                ))}
            </div>
        </div>
    );
};

export default ListPage;
