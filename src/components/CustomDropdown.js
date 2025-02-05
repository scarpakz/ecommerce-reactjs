import Dropdown from 'react-bootstrap/Dropdown';

export const CustomDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Price Low to High</Dropdown.Item>
        <Dropdown.Item>Price High to Low</Dropdown.Item>
        <Dropdown.Item>Newest</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
