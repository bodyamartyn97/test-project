import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


interface PropsPagination {
    elementsPerPage: number,
    totalElements: number,
    paginate: (i: number) => void
}

export default function PaginationBasic({ elementsPerPage, totalElements, paginate }: PropsPagination) {

    const [active, setActive] = useState<number>(1);
    const items = [];

    const handlerClick = (i: number) => {
        setActive(i);
        paginate(i);
    }

    for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
        items.push(
            <Pagination.Item key={i} onClick={() => handlerClick(i)} active={i === active}>
                {i}
            </Pagination.Item>,
        );
    }

    return (
        <div className="pagination-dark">
            <Pagination>{items}</Pagination>
        </div>
    )
}
