import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Error from "../components/Error";

const meta: Meta<typeof Error> = {
	component: Error,
};

export default meta;
type Story = StoryObj<typeof Error>;

export const ErrorOccured: Story = {
	render: () => (
		<Error message="An error occurred while fetching data. Please try again later." />
	),
};

export const NullData: Story = {
	render: () => <Error message="Data is null or undefined!" />,
};
