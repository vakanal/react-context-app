import Item from "../components/Item";

export default {
  title: "Components/Item",
  component: Item,
  argTypes: {
    handleClick: { action: "handleClickItem" },
  },
};

const Template = (args) => <Item {...args} />;

export const Orange = Template.bind({});
Orange.args = {
  label: "Press me",
  backgroundColor: "orange",
  size: "lg",
};
