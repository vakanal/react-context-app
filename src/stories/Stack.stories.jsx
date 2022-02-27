import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
};

const style = {
  width: "50px",
  height: "50px",
  backgroundColor: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((numb) => (
      <div style={style}>{numb + 1}</div>
    ))}
  </Stack>
);

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true,
};
