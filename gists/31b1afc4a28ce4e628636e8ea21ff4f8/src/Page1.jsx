import { Box, Button, Stack } from "@mui/material"
import { useState } from "react"
import { useAlertDialog } from "./AlertDialogProvider"

const Page1 = () => {
	const dialog = useAlertDialog()
	const [log, setLog] = useState([])

	const alert = async () => {
		const result = await dialog.alert("alert メッセージ", "Alert")
		setLog([...log, String(result)])
	}

	const confirm = async () => {
		const result = await dialog.confirm("confirm メッセージ", "Confirm")
		setLog([...log, String(result)])
	}

	const prompt = async () => {
		const result = await dialog.prompt("prompt メッセージ", "Prompt")
		setLog([...log, String(result)])
	}

	return (
		<Box>
			<Stack direction="row" gap={1}>
				<Button variant="contained" onClick={alert}>alert</Button>
				<Button variant="contained" onClick={confirm}>confirm</Button>
				<Button variant="contained" onClick={prompt}>prompt</Button>
			</Stack>
			<Box p={1}>
				{log.map((item, index) => {
					return <Box key={index}>{item}</Box>
				})}
			</Box>
		</Box>
	)
}

export default Page1
