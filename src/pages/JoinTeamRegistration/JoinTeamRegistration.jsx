import jt from "./join-team-registration.module.css";
import SharedLayout from "../../components/SharedLayout";
import Vacancy from "../../components/Vacancy/Vacancy";
import Empty from "../../components/Empty/Empty";
import { useState } from "react";

export default function JoinTeamRegistration() {
  const [open, setOpen] = useState(false);
  return (
    <SharedLayout>
      <section className={`${jt.container} global-header-padding flex-center`}>
        <div className={`${jt.wrapper} global-content-wrapper`}>
          <h2 className={jt.header}>join our team</h2>

          {open ? <Vacancy /> : <Empty />}
        </div>
      </section>
    </SharedLayout>
  );
}
