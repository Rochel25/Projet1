import React from "react";
import "../Styles/client.css";
import "../Styles/style.css";
import Button from "./Button";

export const Clients = () => {
  return (
    <div>
    <div className="clients">
      <div className="div">
        <div className="section-title">Our Clients</div>
        <p className="description">We have been working with some Fortune 500+ clients</p>
      </div>
      <img className="clients-logos" alt="Clients logos" src="img/clients.svg" />
    </div>
    <div className="community">
        <p className="section-title">Manage your entire community in a single system</p>
        <p className="description">Who is Nextcent suitable for?</p>
    </div>
    <div className="unlock">
      <img className="frame" alt="Frame" src="img/client2.svg" />
      <div className="div">
        <div className="frame-2">
          <p className="text-wrapper">The unseen of spending three years at Pixelgrade</p>
          <p className="when-joining-the">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae
            est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
            Donec elementum pulvinar odio.
          </p>
        </div>
        <Button
          className="button-instance"
          divClassName="design-component-instance-node"
          icon={false}
          size="medium"
          state="default"
          text="Learn More"
          type="primary"
        />
      </div>
    </div>
</div>
  );
};
