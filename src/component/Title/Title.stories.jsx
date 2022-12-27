import React from "react";

import { Title } from ".";

export default {
    title: "Example/Title",
    component: Title,
};

const Template = (args) => <Title {...args} />;

export const TitleLvl1 = Template.bind({});
TitleLvl1.args = {
    level: 1,
    text: "Test Title Lvl 1",
};

export const TitleLvl2 = Template.bind({});
TitleLvl2.args = {
    level: 2,
    text: "Test Title Lvl 1",
};

export const TitleLvl3 = Template.bind({});
TitleLvl3.args = {
    level: 3,
    text: "Test Title Lvl 1",
};

export const TitleLvlOutRange = Template.bind({});
TitleLvlOutRange.args = {
    level: 9,
    text: "Test Title Lvl 1",
};
