import RoleCard from "../RoleCard/RoleCard";
import TinyHeader from "../TinyHeader/TinyHeader";
import v from "./vacancy.module.css";
import { useState } from "react";

export default function Vacancy() {
  const { email, setEmail } = useState({});
  function handleApply(title, level) {
    console.log(title, level);
  }
  return (
    <div className={v.content}>
      <div className={v.category}>
        <TinyHeader headline="design team" />
        <RoleCard
          title="Product designer - Volunteer"
          level="mid level"
          handleApply={handleApply}
        />
      </div>

      <div className={v.category}>
        <TinyHeader headline="product team" />
        <RoleCard title="Product owner - Volunteer" level="mid level" />
      </div>

      <div className={v.category}>
        <TinyHeader headline="dev team" />
        <RoleCard title="ReactJS developer - Volunteer" level="mid level" />
        <RoleCard title="MongoDb developer - Volunteer" level="mid level" />
      </div>
    </div>
  );
}
