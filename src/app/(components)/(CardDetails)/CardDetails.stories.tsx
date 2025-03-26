import type { Meta, StoryObj } from "@storybook/react";

import { CardDetails } from "./CardDetails";
import "../../globals.css";

const meta: Meta<typeof CardDetails> = {
  component: CardDetails,
};

export default meta;
type Story = StoryObj<typeof CardDetails>;

export const CardDetailsWithoutLogo: Story = {
  args: {
    data: {
      name: "Customer 1",
      description: "Description of the customer",
      status: "active",
      details: [
        {
          label: "Detail 1",
          value: "my detail",
        },
      ],
    },
  },
};

export const CardDetailsWithLogo: Story = {
  args: {
    data: {
      name: "Customer 1",
      description: "Description of the customer",
      status: "active",
      details: [
        {
          label: "Detail 1",
          value: "my detail",
        },
      ],
      logo: "https://www.svgrepo.com/show/475643/dribbble-color.svg",
    },
  },
};
