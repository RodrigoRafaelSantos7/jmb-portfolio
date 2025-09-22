import {
	Body,
	Button,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name?: string;
	email?: string;
	message?: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
	<Html>
		<Head />
		<Body style={main}>
			<Preview>
				A new message from your portfolio website has been received.
			</Preview>
			<Container style={container}>
				<Text style={title}>
					<strong>João</strong>, a new message from your portfolio website has
					been received.
				</Text>

				<Text style={text}>
					<strong>Contact details:</strong>
					<br />
					Name: {name}
					<br />
					Email: {email}
				</Text>

				<Section style={section}>
					<Text style={text}>{message}</Text>
				</Section>
				<Section style={buttonSection}>
					<Button target="_blank" href={`mailto:${email}`} style={button}>
						Send a reply
					</Button>
				</Section>
			</Container>
		</Body>
	</Html>
);

ContactEmail.PreviewProps = {
	name: "João",
	email: "joaomariastbotelho@gmail.com",
	message:
		"Hello, I am João Maria Botelho and I would like to discuss the opportunity to work together.",
} as ContactEmailProps;

export default ContactEmail;

const main = {
	backgroundColor: "#ffffff",
	color: "#24292e",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
	maxWidth: "480px",
	margin: "0 auto",
	padding: "20px 0 48px",
};

const title = {
	fontSize: "24px",
	lineHeight: 1.25,
};

const section = {
	padding: "24px",
	border: "solid 1px #dedede",
	borderRadius: "5px",
	textAlign: "center" as const,
};

const buttonSection = {
	padding: "24px",
	textAlign: "center" as const,
};

const text = {
	margin: "0 0 10px 0",
	textAlign: "left" as const,
};

const button = {
	fontSize: "14px",
	backgroundColor: "#001F3F",
	color: "#fff",
	lineHeight: 1.5,
	borderRadius: "0.5em",
	padding: "12px 24px",
};

const links = {
	textAlign: "center" as const,
};

const link = {
	color: "#0366d6",
	fontSize: "12px",
};

const footer = {
	color: "#6a737d",
	fontSize: "12px",
	textAlign: "center" as const,
	marginTop: "60px",
};
