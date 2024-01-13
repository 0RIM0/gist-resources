import { useState } from "react"
import { Box, Button, IconButton, InputAdornment, Menu, MenuItem, Stack, TextField } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const App = () => {
	return (
		<Stack>
			<TextField1 />
			<TextField2 />
		</Stack>
	)
}

const TextField1 = () => {
	return (
		<Box>
			<TextField
				margin="dense"
				variant="outlined"
				label="テキスト1"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Button variant="contained">検索</Button>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	)
}

const TextField2 = () => {
	const [text, setText] = useState("")
	const [anchor, setAnchor] = useState(null)

	return (
		<Box>
			<TextField
				margin="dense"
				variant="outlined"
				label="テキスト2"
				value={text}
				onChange={(event) => setText(event.target.value)}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton onClick={(event) => setAnchor(event.target)}>
								<ExpandMoreIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
			<Menu
				open={!!anchor}
				anchorEl={anchor}
				onClose={() => setAnchor(null)}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				<MenuItem onClick={() => setText("テキストサンプル1")}>テキストサンプル1</MenuItem>
				<MenuItem onClick={() => setText("テキストサンプル2")}>テキストサンプル2</MenuItem>
				<MenuItem onClick={() => setText("")}>(クリア)</MenuItem>
			</Menu>
		</Box>
	)
}

export default App
