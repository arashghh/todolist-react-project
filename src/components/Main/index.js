import React from "react";
import Column from "../Column";

export default function Main() {
  return (
    <div>
      <Column day={"Sunday"} />
      <Column day={"Monday"} />
      <Column day={"Tuesday"} />
      <Column day={"Wednesday"} />
      <Column day={"Thursday"} />
      <Column day={"Friday"} />
      <Column day={"Saturday"} />
    </div>
  );
}
