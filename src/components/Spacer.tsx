export default function Spacer({
	height = '40px',
	width = '0px',
}: {
	height?: string;
	width?: string;
}) {
	return <div style={{ height: height, width: width }}></div>;
}
