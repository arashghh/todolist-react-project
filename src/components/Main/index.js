import React from "react";
import Column from "../Column";

export default function Main() {
  return (
    <div>
      <Column day={"Sunday"} dayId={1} />
      <Column day={"Monday"} dayId={2} />
      <Column day={"Tuesday"} dayId={3} />
      <Column day={"Wednesday"} dayId={4} />
      <Column day={"Thursday"} dayId={5} />
      <Column day={"Friday"} dayId={6} />
      <Column day={"Saturday"} dayId={7} />
    </div>
  );
}
