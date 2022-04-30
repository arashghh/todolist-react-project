import React from "react";
import Column from "../Column";

export default function Main() {
  return (
    <div>
      <Column day={"Saturday"} dayId={1} />
      <Column day={"Sunday"} dayId={2} />
      <Column day={"Monday"} dayId={3} />
      <Column day={"Tuesday"} dayId={4} />
      <Column day={"Wednesday"} dayId={5} />
      <Column day={"Thursday"} dayId={6} />
      <Column day={"Friday"} dayId={7} />
    </div>
  );
}
