import colors from "../../constants/colors"
import agnosticStyles from "../../constants/agnosticStyles"

const getStyles = (state) => ({
	wrapper: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		width: "100%",
		backgroundColor: colors.light,
		minHeight: "100vh",
	},
	navigation: {
		padding: agnosticStyles.padding,
		gridRow: state.view === "desktop" ? 1 : 2,
		gridColumn: state.view === "desktop" ? "1/1" : "1/5",
		backgroundColor: state.view === "desktop" ? colors.charcoal : colors.lightGrey,
	},
	stage: {
		padding: agnosticStyles.padding,
		gridRow: state.view === "desktop" ? 1 : 1,
		gridColumn: state.view === "desktop" ? "2/5" : "1/5",
		backgroundColor: state.view === "desktop" ? colors.lightGrey : colors.charcoal,
	},
	controls: {
		gridRow: state.view === "desktop" ? 2 : 3,
		gridColumn: "1/5",
		backgroundColor: colors.controls,
	}
})

export default getStyles