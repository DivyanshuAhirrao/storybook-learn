import { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "light",
  //   argsType: {
  //     variant: {
  //        control: { type: "select" },
  //       options: ["green", "yellow", "red"],
  //     },
  //   },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "green",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Grouped: Story = {
  render: () => <div style={{width:'max-content', borderRadius:'10px', display:"flex" , flexDirection:"column", gap:6, padding:20, backgroundColor:'grey' }}>
    <Light variant="green" />
    <Light variant="yellow" />
    <Light variant="red" />
  </div>
};
