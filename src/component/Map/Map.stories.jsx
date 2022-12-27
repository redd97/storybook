import React from "react";

import { Map } from ".";

export default {
    title: "Example/Map",
    component: Map,
};

const Template = (args) => <Map {...args} />;

export const MapConfig1 = Template.bind({});
MapConfig1.args = {
    address: "Chisinau Moldova",
    zoom: 7,
};

export const MapConfig2 = Template.bind({});
MapConfig2.args = {
    address: "Moscow",
    zoom: 14,
};
