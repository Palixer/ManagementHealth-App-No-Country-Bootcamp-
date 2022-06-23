import { useState ,useContext} from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { DropdownsContext } from "../../context/authContext";


const DropDownProfesion = (props) => {
  const {stateProfesion,setStateProfesion} = useContext(DropdownsContext)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["Médico", "Enfermero", "Acompañante"];


  return (
    <div className="left">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle  style={{width:'200px',backgroundColor:'white',color:'black'}}  caret>{stateProfesion}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Seleccione</DropdownItem>

          {items.map((val, id) => {
            return (
              <div  key={id}>
                <DropdownItem  style={{width:'200px'}} divider></DropdownItem>
                <DropdownItem onClick={() => setStateProfesion(val)}>{val}</DropdownItem>
              </div>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropDownProfesion;
