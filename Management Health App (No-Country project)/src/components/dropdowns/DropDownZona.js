import { useContext, useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import {  DropdownsContext } from "../../context/authContext";

const DropDownZona = (props) => {
  const {stateZona,setZona} = useContext(DropdownsContext)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["CABA", "Prov. Buenos Aires", "Otra Provincia"];

  return (
    <div className="center">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{width:'200px',color:'black',backgroundColor:'White'}}  caret>
          {stateZona}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Seleccione</DropdownItem>

          {items.map((val, id) => {
            return (
              <div key={id}>
                <DropdownItem style={{width:'200px'}} divider></DropdownItem>
                <DropdownItem onClick={() => setZona(val)}>{val}</DropdownItem>
              </div>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default DropDownZona;
