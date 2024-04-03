import React, { CSSProperties } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface ErrorProps {
	message: string;
}

export default function Error(props: ErrorProps) {
	const styles: CSSProperties = {
		width: "fit-content",
		margin: "auto",
		marginTop: "40vh",
	};

	return (
		<Alert severity="error" style={styles}>
			<AlertTitle>Error</AlertTitle>
			{props.message}
		</Alert>
	);
}
