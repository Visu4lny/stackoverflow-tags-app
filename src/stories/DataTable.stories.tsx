import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "../components/DataTable";

const meta: Meta<typeof DataTable> = {
	component: DataTable,
	render: (args, { loaded: { data } }) => <DataTable {...args} data={data} />,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const WithDataFromApi: Story = {
	loaders: [
		async () => ({
			data: await (
				await fetch(
					"https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow",
				)
			).json(),
		}),
	],
};
