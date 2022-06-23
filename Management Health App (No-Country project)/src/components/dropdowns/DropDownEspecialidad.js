import { useState,useContext } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { DropdownsContext } from "../../context/authContext";




const DropDownEspecialidad = (props) => {
  const {stateEspecialidad,setStateEspecialidad} = useContext(DropdownsContext)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const items = ["Clínico", "Cardiología", "Psicología", "Kinesiología","Oncología"];


  return (
    <div className="center">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle style={{width:'200px',color:'black',backgroundColor:'White'}}  caret>{stateEspecialidad}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Seleccione</DropdownItem>

          {items.map((val, id) => {
            return (
              <div key={id}>
                <DropdownItem style={{width:'200px',color:'black',backgroundColor:'White'}}  divider></DropdownItem>
                <DropdownItem onClick={() => setStateEspecialidad(val)}>{val}</DropdownItem>
              </div>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default DropDownEspecialidad;
