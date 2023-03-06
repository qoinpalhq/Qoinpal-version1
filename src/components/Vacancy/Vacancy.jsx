import RoleCard from "../RoleCard/RoleCard";
import TinyHeader from "../TinyHeader/TinyHeader";
import v from "./vacancy.module.css";
import data from "./data";

export default function Vacancy() {
  return (
    <div className={v.content}>
      {data.map((x) => (
        <div key={x.id} className={v.category}>
          <TinyHeader headline={x.headline} />
          {x.roles.map((y) => (
            <RoleCard
              duration={y.duration}
              location={y.location}
              title={y.title}
              level={y.level}
              key={y.id}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
