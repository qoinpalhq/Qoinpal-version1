import RoleCard from "../RoleCard/RoleCard";
import TinyHeader from "../TinyHeader/TinyHeader";
import v from "./vacancy.module.css";

export default function Vacancy() {
  return (
    <div className={v.content}>
      <div className={v.category}>
        <TinyHeader headline="design team" />
        <RoleCard title="Product designer - Volunteer" level="mid level" id={1}/>
      </div>

      <div className={v.category}>
        <TinyHeader headline="product team" />
        <RoleCard title="Product owner - Volunteer" level="mid level"  id  = {2}/>
      </div>

      <div className={v.category}>
        <TinyHeader headline="dev team" />
        <RoleCard title="ReactJS developer - Volunteer" level="mid level" id = {3} />
        <RoleCard title="MongoDb developer - Volunteer" level="mid level" id = {4}/>
      </div>
    </div>
  );
}
