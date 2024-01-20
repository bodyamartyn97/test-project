import * as React from 'react';

type PropsDate = {
    date: number
}

export default function TableDataDate({ date }: PropsDate) {

    return (
        <>
            {new Date(date).toLocaleDateString()}
        </>
    )
}