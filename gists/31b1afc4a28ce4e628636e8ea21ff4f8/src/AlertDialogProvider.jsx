import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { createContext, useContext, useMemo, useState } from "react"

export const AlertDialogContext = createContext()

export const useAlertDialog = () => useContext(AlertDialogContext)

export const AlertDialogProvider = ({ children }) => {
	const [state, setState] = useState({ type: "closed" })
	const [text, setText] = useState("")

	const value = useMemo(() => {
		return {
			alert: async (message, title) => {
				const { promise, resolve } = Promise.withResolvers()
				setState({ type: "alert", message, title, resolve })
				return promise
			},
			confirm: async (message, title) => {
				const { promise, resolve } = Promise.withResolvers()
				setState({ type: "confirm", message, title, resolve })
				return promise
			},
			prompt: async (message, title) => {
				const { promise, resolve } = Promise.withResolvers()
				setState({ type: "prompt", message, title, resolve })
				setText("")
				return promise
			},
		}
	}, [])

	const ok = () => {
		const resolve = state.resolve
		if (!resolve) return

		if (state.type === "prompt") {
			resolve(text)
		} else {
			resolve(true)
		}
		setState({ type: "closed" })
	}

	const cancel = () => {
		const resolve = state.resolve
		if (!resolve) return
		resolve(false)
		setState({ type: "closed" })
	}

	return (
		<AlertDialogContext.Provider value={value}>
			{children}
			<Dialog open={state.type !== "closed"} fullWidth>
				{!!state.title && <DialogTitle>{state.title}</DialogTitle>}
				<DialogContent>
					<DialogContentText sx={{ whiteSpace: "pre-line" }}>{state.message}</DialogContentText>
					{state.type === "prompt" && (
						<TextField
							value={text}
							onChange={(event) => setText(event.target.value)}
							fullWidth
							size="small"
							margin="dense"
						/>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={ok}>OK</Button>
					{(state.type === "confirm" || state.type === "prompt") && <Button onClick={cancel}>キャンセル</Button>}
				</DialogActions>
			</Dialog>
		</AlertDialogContext.Provider>
	)
}
