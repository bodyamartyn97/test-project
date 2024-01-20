import Form from 'react-bootstrap/Form';

interface propsType {
    properties: string[],
    searchValue: string,
    onChangeSearchValue: (string: string) => void,
    setSearchBy: (string: string) => void
}

export default function FilteredComponent({ properties, searchValue, onChangeSearchValue, setSearchBy }: propsType) {

    return (
        <>
            <Form.Select onChange={(e) => setSearchBy(e.target.value)}>
                {properties.map(prop => <option key={prop} >{prop}</option>)}
            </Form.Select>
            <Form.Control
                type="text"
                placeholder="Search"
                onChange={(e) => onChangeSearchValue(e.target.value)}
                value={searchValue}
            />
        </>
    )
}