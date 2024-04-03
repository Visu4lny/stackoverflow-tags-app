import CircularProgress from "@mui/material/CircularProgress";
import React, { CSSProperties, useEffect, useState } from "react";

export default function Loading() {
	const styles: CSSProperties = {
		width: "40%",
		margin: "auto",
		marginTop: "40vh",
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	};

	const [dots, setDots] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prevDots) => {
				return prevDots.length >= 3 ? "" : prevDots + ".";
			});
		}, 500);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="" style={styles}>
			<h1>Loading{dots}</h1>
			<CircularProgress />
		</div>
	);
}
