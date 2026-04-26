import { css } from "lit"

export default css`
	.container {
		border: 1px solid #e1dfdd;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.pane-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;

		h1 {
			margin: 0;
			font-size: 20px;
			font-weight: normal;
		}
	}
`
