import { AlertDialogProvider } from "./AlertDialogProvider.jsx"
import Page1 from "./Page1.jsx"

const App = () => {
	return (
		<AlertDialogProvider>
			<Page1 />
		</AlertDialogProvider>
	)
}

export default App
