import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Icon, Strong, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { FiFigma, FiAlignLeft, FiCode } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			quarkly-title="Header"
			background="--bgc"
			padding="35px 0 102px 0"
			lg-padding="35px 0 50px 0"
			sm-padding="35px 0 35px 0"
			md-position="relative"
			md-padding="35px 0 35px 0"
		>
			<Override slot="SectionContent" max-width="1520px" as="section" sm-position="relative" />
			<Image
				width="64px"
				height="64px"
				sm-position="absolute"
				sm-bottom="-7px"
				sm-left="0px"
				sm-right="auto"
				sm-top="auto"
				src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/2311693%201.png?v=2021-05-31T18:14:02.194Z"
				sm-height="62.62068965517241px"
				sm-width="115.72413793103448px"
				display="none"
				md-display="flex"
				md-bottom="auto"
				md-height="69px"
				md-left="51px"
				md-position="absolute"
				md-right="auto"
				md-top="28px"
				md-width="114px"
			/>
			<Components.QuarklycommunityKitMobileSidePanel md-padding="0px 0px 0px 0px">
				<Override slot="Button Text" sm-display="none" md-display="none" />
				<Override slot="Content" md-padding="38px 16px 24px 16px" />
				<Override slot="Cross" md-padding="32px 32ppx 0px 0px" />
				<Box
					quarkly-title="Content"
					display="flex"
					margin="0px 0px 0px 0px"
					justify-content="space-between"
					sm-justify-content="center"
					sm-align-items="center"
					sm-flex-direction="column"
					sm-margin="50px 0px 0px 0px"
					md-flex-direction="column"
					md-margin="50px 0px 0px 0px"
				>
					<Image
						width="auto"
						height="auto"
						src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/2311693%201.png?v=2021-05-31T18:14:02.194Z"
						alt="Logo"
						title="Logo"
						sm-display="none"
						md-display="none"
					/>
					<Components.QuarklycommunityKitMenu
						display="flex"
						quarkly-title="Menu"
						flex-direction="row"
						align-items="center"
						sm-flex-direction="column"
						sm-justify-content="center"
						sm-margin="0px 0px 0px 0px"
						md-justify-content="center"
						md-text-align="center"
						md-flex-direction="column"
					>
						<Override
							slot="item"
							padding="0px 0px 0px 0px"
							sm-text-align="center"
							sm-margin="0px 0px 50px 0px"
							md-margin="0px 0px 50px 0px"
						/>
						<Override
							slot="link"
							padding="8px 0px 8px 0px"
							font="--links"
							color="--text"
							text-decoration-line="initial"
							borderBottomColor="red"
							borderBottomWidth="2"
							marginBottom="30"
							active-border-width="0 0 3px 0"
							active-border-style="solid"
							active-border-color="--color-text"
							margin="0px 55px 0px 0px"
							active-border-radius="0px"
							border-radius="3px"
							visited-border-radius="3px"
							visited-border-color="--color-text"
							hover-border-width="0 0 3px 0"
							hover-border-radius="3px"
							hover-border-color="--color-text"
							hover-border-style="solid"
							hover-transition="all 0.2s ease-in-out 0s"
							sm-text-align="center"
							sm-padding="0px 0px 0px 0px"
							sm-margin="0px 0px 0px 0px"
							md-margin="0px 0px 0px 0px"
						/>
						<Override slot="link-about" href="#about">
							О нас
						</Override>
						<Override slot="link-who-we-need" href="#skills">
							Кого мы ищем
						</Override>
						<Override slot="link-order" href="#order">
							Оставить заявку
						</Override>
						<Override slot="item-index" display="none" />
					</Components.QuarklycommunityKitMenu>
					<Link
						href="#order"
						width="184px"
						height="78px"
						color="--buttonText"
						background="--button"
						border-radius="12px"
						display="flex"
						justify-content="center"
						align-items="center"
						font="--button"
						text-decoration-line="initial"
						hover-background="#f07d5f"
						hover-transition="all 0.3s ease-in-out 0s"
						transition="all 0.3s ease-in-out 0s"
						sm-display="none"
						md-display="none"
					>
						Заявка{"\n\n"}
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section
			quarkly-title="Main"
			background="--bgc"
			padding="0 0 100px 0"
			margin="0 0 0 51"
			md-padding="0 0 50px 0"
			md-overflow-x="hidden"
			md-overflow-y="hidden"
			sm-margin="0px 0px 0px 0px"
		>
			<Override slot="SectionContent" padding="35px 0px 010px 0px" width="1520px" max-width="1520px" />
			<Box
				quarkly-title="Header"
				display="flex"
				flex-direction="row"
				max-width="none"
				justify-content="space-between"
				lg-margin="0px 110px 0px 100px"
				md-position="relative"
				sm-margin="0px 50px 0px 50px"
				sm-justify-content="center"
				md-margin="0px 150px 0px 150px"
				xs-margin="0px 25px 0px 25px"
			>
				<Box display="flex" flex-direction="column" position="relative" sm-align-items="center">
					<Text
						quarkly-title="Title"
						font="--headline1"
						color="--text"
						width="628px"
						lg-font="normal 800 54px/1.2 &quot;Raleway&quot;, sans-serif"
						lg-width="100%"
						sm-text-align="center"
						xs-font="normal 800 36px/1.2 &quot;Raleway&quot;, sans-serif"
						xs-margin="16px 0px 0px 0px"
					>
						Веб дизайнер,{" "}
						<br />
						мы ищем
					</Text>
					<Text
						quarkly-title="Title"
						font="--headline1Second"
						color="--text"
						position="relative"
						z-index="1"
						lg-font="normal 800 100px/0.6 &quot;Raleway&quot;, sans-serif"
						sm-text-align="center"
						xs-font="normal 800 70px/0.6 &quot;Raleway&quot;, sans-serif"
					>
						тебя!
					</Text>
					<Text
						font="--headline3"
						color="--text2"
						margin="60px 0px 60px 0px"
						lg-font="normal 500 18px/2 &quot;Raleway&quot;, sans-serif"
						sm-text-align="center"
						xs-font="normal 500 14px/2 &quot;Raleway&quot;, sans-serif"
					>
						Стань частью нашей дружной команды
						<br />
						и выйди на навый уровень дизайна
					</Text>
					<Link
						href="#about"
						width="220px"
						height="75px"
						color="--buttonText"
						background="--button"
						border-radius="12px"
						display="flex"
						justify-content="center"
						align-items="center"
						font="--button"
						text-decoration-line="initial"
						hover-transform="translateY(-5px)"
						hover-transition="all 0.3s ease-in-out 0s"
						transition="all 0.3s ease-in-out 0s"
						transform="translateY(5px)"
						lg-width="200px"
						lg-height="65px"
						lg-font="normal 500 20px/36px &quot;Raleway&quot;, sans-serif"
					>
						Найтись!{"\n\n"}
					</Link>
					<Box
						display="flex"
						color="--cardColor3"
						width="405px"
						height="98px"
						position="absolute"
						top="255px"
						right="auto"
						bottom="auto"
						left="20px"
						background="linear-gradient(270deg, #FFD482 76.04%, rgba(255, 212, 130, 0) 100%)"
						z-index="0"
						lg-top="184.762px"
						lg-right="137.656px"
						lg-bottom="287.5012380952381px"
						lg-left="-9.238095238095212px"
						lg-width="269.5660952380952px"
						lg-height="58.732861904761904px"
						sm-bottom="auto"
						sm-left="auto"
						sm-right="59px"
						sm-top="188px"
						xs-bottom="auto"
						xs-left="27px"
						xs-right="auto"
						xs-top="119px"
						xs-width="202.547px"
						xs-height="49.7188px"
					/>
				</Box>
				<Image
					width="auto"
					height="auto"
					src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/Group%202.png?v=2021-05-31T16:51:42.904Z"
					display="block"
					flex-direction="column"
					align-items="flex-end"
					alt="main_img"
					title="main_img"
					lg-width="40% "
					md-position="absolute"
					md-top="0px"
					md-right="-268px"
					md-bottom="auto"
					md-left="auto"
					md-width="430.797px"
					md-height="442.938px"
					sm-left="auto"
					sm-right="-12px"
					sm-width="226.516px"
					sm-top="79px"
					sm-bottom="auto"
					sm-height="173.391px"
					sm-z-index="0"
					sm-display="none"
				/>
				<Image
					width="auto"
					height="auto"
					src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/White-in-Basic11.png?v=2021-06-01T13:11:08.992Z"
					display="none"
					flex-direction="column"
					align-items="flex-end"
					alt="main_img"
					title="main_img"
					lg-width="40% "
					md-position="absolute"
					md-top="0px"
					md-right="-268px"
					md-bottom="auto"
					md-left="auto"
					md-width="430.797px"
					md-height="442.938px"
					sm-left="auto"
					sm-right="-281px"
					sm-width="495.969px"
					sm-top="51px"
					sm-bottom="auto"
					sm-height="342.844px"
					sm-z-index="0"
					sm-transform="rotate(-40deg)"
					sm-display="block"
					xs-bottom="93px"
					xs-height="201.844px"
					xs-left="auto"
					xs-right="-202px"
					xs-top="auto"
					xs-width="400.969px"
				/>
			</Box>
		</Section>
		<Section
			margin="0px 0 0px 0"
			padding="100px 0 100px 0"
			background="--bgc"
			quarkly-title="About"
			id="about"
			lg-padding="50px 0 50pxpx 0"
			md-padding="50px 0 50px 0"
		>
			<Override
				slot="SectionContent"
				width="1520px"
				max-width="1520px"
				flex-direction="row"
				justify-content="space-between"
				lg-margin="0px 0px 0px 0px"
				lg-align-items="center"
				lg-flex-direction="column-reverse"
				md-padding="0px 50px 0px 50px"
				xs-padding="0px 25px 0px 25px"
			/>
			<Box
				display="flex"
				justify-content="space-between"
				quarkly-title="about_left"
				max-width="938px"
				width="938px"
				lg-max-width="70%"
				lg-width="100%"
				md-flex-direction="column"
				md-align-items="center"
				md-margin="50px 0px 0px 0px"
				xs-margin="25px 0px 0px 0px"
				xs-width="100%"
				xs-max-width="100%"
			>
				<Box
					width="289px"
					height="385px"
					border-radius="20px"
					background="FEFEFE"
					box-shadow="--cardShadow"
					padding="0px 0px 0px 30"
					lg-width="270px"
					lg-height="350px"
					quarkly-title="about_left_item"
					md-width="100%"
					md-max-width="500px"
					md-height="272px"
					md-position="relative"
					xs-height="230px"
					xs-max-width="300px"
					sm-width="400px"
				>
					<Box
						width="65px"
						height="65px"
						background="--card1"
						border-radius="20px"
						margin="30px 0px 0px 30px"
						box-shadow="--greenShadow"
						display="flex"
						justify-content="center"
						align-items="center"
						md-height="75px"
						md-width="75px"
						md-position="absolute"
						md-bottom="auto"
						md-left="auto"
						md-right="200px"
						md-top="-50px"
						md-margin="0px 0px 0px 0px"
						sm-bottom="auto"
						sm-left="162px"
						sm-right="auto"
						sm-top="-51px"
						xs-left="120px"
						xs-width="60px"
						xs-height="60px"
						xs-border-radius="15px"
						xs-top="-25px"
					>
						<Icon category="fa" icon={FaRegCalendarAlt} color="--buttonText" size="34px" />
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						margin="0px 0px 0px 30px"
						padding="30px 0px 0px 0px"
						md-align-items="center"
						md-margin="0px 0px 0px 0px"
						md-padding="75px 0px 0px 0px"
						sm-padding="75px 25px 0px 25px"
					>
						<Text
							font="--cardTitle"
							margin="0px 0px 0px 0px"
							color="--text"
							lg-font="normal 600 28px &quot;Lato&quot;, sans-serif"
							xs-font="normal 600 25px &quot;Lato&quot;, sans-serif"
						>
							15 лет
						</Text>
						<Text
							max-width="200px"
							font="--cardDescription"
							border-color="--color-text2"
							color="--text2"
							margin="px 0px px 0px"
							padding="20px 0px 0px 0px"
							lg-font="normal 500 16px/180% &quot;Raleway&quot;, sans-serif"
							md-width="100%"
							md-max-width="400px"
							md-text-align="center"
							md-font="normal 600 18px/180% &quot;Raleway&quot;, sans-serif"
							md-padding="10px 0px 0px 0px"
							sm-font="normal 600 16px/180% &quot;Raleway&quot;, sans-serif"
							sm-padding="30px 0px 0px 0px"
							sm-margin="px 0px px 0px"
							xs-font="normal 600 14px/180% &quot;Raleway&quot;, sans-serif"
							sm-width="300px"
						>
							На рынке SaaS-конструкторов сайтов в России, СНГ и мир
						</Text>
					</Box>
				</Box>
				<Box
					width="289px"
					height="385px"
					border-radius="20px"
					background="FEFEFE"
					box-shadow="--cardShadow"
					padding="0px 0px 0px 30"
					lg-width="270px"
					lg-height="350px"
					quarkly-title="about_left_item"
					md-width="100%"
					md-max-width="500px"
					md-height="272px"
					md-position="relative"
					md-margin="120px 0px 0px 0px"
					xs-height="230px"
					xs-margin="70px 0px 0px 0px"
					xs-max-width="300px"
					sm-width="400px"
				>
					<Box
						width="65px"
						height="65px"
						background="--card2"
						border-radius="20px"
						margin="30px 0px 0px 30px"
						box-shadow="--orangeShadow"
						display="flex"
						justify-content="center"
						align-items="center"
						md-height="75px"
						md-width="75px"
						md-position="absolute"
						md-top="-53px"
						md-margin="0px 0px 0px 0"
						md-right="200px"
						sm-left="162px"
						xs-left="120px"
						xs-width="60px"
						xs-height="60px"
						xs-border-radius="15px"
						xs-top="-25px"
					>
						<Icon category="ai" icon={AiFillApi} color="--buttonText" size="34px" />
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						margin="0px 0px 0px 30px"
						padding="30px 0px 0px 0px"
						md-align-items="center"
						md-margin="0px 0px 0px 0px"
						md-padding="75px 0px 0px 0px"
						sm-padding="75px 25px 0px 25px"
					>
						<Text
							font="--cardTitle"
							margin="0px 0px 10px 0px"
							color="--text"
							lg-font="normal 600 28px &quot;Lato&quot;, sans-serif"
							xs-font="normal 600 25px &quot;Lato&quot;, sans-serif"
							sm-margin="0px 0px 0px 0px"
						>
							20 продуктов
						</Text>
						<Text
							max-width="200px"
							font="--cardDescription"
							border-color="--color-text2"
							color="--text2"
							margin="0px 0px 0px 0px"
							padding="20px 0px 0px 0px"
							lg-font="normal 500 16px/180% &quot;Raleway&quot;, sans-serif"
							md-width="100%"
							md-text-align="center"
							md-font="normal 600 18px/180% &quot;Raleway&quot;, sans-serif"
							md-display="block"
							md-max-width="400px"
							md-padding="10px 0px 0px 0px"
							sm-font="normal 600 16px/180% &quot;Raleway&quot;, sans-serif"
							xs-font="normal 600 14px/180% &quot;Raleway&quot;, sans-serif"
							sm-width="300px"
							sm-padding="30px 0px 0px 0px"
						>
							И экосистема для тех, кто создает и развивает сайты профессионально и своими силами
						</Text>
					</Box>
				</Box>
				<Box
					width="289px"
					height="385px"
					border-radius="20px"
					background="FEFEFE"
					box-shadow="--cardShadow"
					padding="0px 0px 0px 30"
					lg-width="270px"
					lg-height="350px"
					quarkly-title="about_left_item"
					md-width="100%"
					md-max-width="500px"
					md-height="272px"
					md-position="relative"
					md-margin="120px 0px 0px 0px"
					sm-margin="120px 0px 0px 0px"
					sm-padding="0px 10p 0px 10px"
					xs-height="230px"
					xs-margin="70px 0px 0px 0px"
					xs-max-width="300px"
					sm-width="400px"
				>
					<Box
						width="65px"
						height="65px"
						background="--card3"
						border-radius="20px"
						margin="30px 0px 0px 30px"
						box-shadow="--yellowShadow"
						display="flex"
						justify-content="center"
						align-items="center"
						md-height="75px"
						md-width="75px"
						md-position="absolute"
						md-margin="0px 0px 0px 0"
						md-top="-53px"
						md-right="200px"
						sm-left="162px"
						xs-left="120px"
						xs-width="60px"
						xs-height="60px"
						xs-border-radius="15px"
						xs-top="-25px"
					>
						<Icon category="md" icon={MdWeb} color="--buttonText" size="34px" />
					</Box>
					<Box
						display="flex"
						flex-direction="column"
						margin="0px 0px 0px 30px"
						padding="30px 0px 0px 0px"
						md-align-items="center"
						md-margin="0px 0px 0px 0px"
						md-padding="75px 0px 0px 0px"
						sm-padding="75px 25px 0px 25px"
					>
						<Text
							font="--cardTitle"
							margin="0px 0px 0px 0px"
							color="--text"
							lg-font="normal 600 28px &quot;Lato&quot;, sans-serif"
							xs-font="normal 600 25px &quot;Lato&quot;, sans-serif"
						>
							3,5 млн
						</Text>
						<Text
							max-width="200px"
							font="--cardDescription"
							border-color="--color-text2"
							color="--text2"
							margin="10px 0px 16px 0px"
							padding="20px 0px 0px 0px"
							lg-font="normal 500 16px/180% &quot;Raleway&quot;, sans-serif"
							md-width="100%"
							md-text-align="center"
							md-font="normal 600 18px/180% &quot;Raleway&quot;, sans-serif"
							md-display="block"
							md-max-width="400px"
							md-padding="20px 0px 0px 0px"
							md-margin="0px 0px 16px 0px"
							sm-font="normal 600 16px/180% &quot;Raleway&quot;, sans-serif"
							xs-font="normal 600 14px/180% &quot;Raleway&quot;, sans-serif"
							sm-width="300px"
							sm-padding="30px 0px 0px 0px"
						>
							Сайтов работают сегодня на базе платформ uKit, uCoz, Narod, uShop
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				quarkly-title="about_right"
				display="flex"
				flex-direction="column"
				lg-width="auto"
				lg-align-items="center"
				md-width="100%"
			>
				<Text
					font="--headline2"
					color="--text"
					margin="0px 0px 0px 0px"
					quarkly-title="about_right_itle"
					lg-font="normal 700 40px/1.2 &quot;Raleway&quot;, sans-serif"
					md-font="normal 700 40px/1.2 &quot;Raleway&quot;, sans-serif"
					sm-font="normal 700 35px/1.2 &quot;Raleway&quot;, sans-serif"
					xs-font="normal 700 24px/1.2 &quot;Raleway&quot;, sans-serif"
				>
					Кто Мы Такие?
				</Text>
				<Box
					width="480px"
					margin="30px 0px 0px 0px"
					font="--aboutTitle"
					color="--text2"
					quarkly-title="about_right_description"
					lg-width="900px"
					lg-display="block"
					lg-flex-direction="row"
					lg-align-items="center"
					lg-justify-content="center"
					lg-margin="30px 0px 50px 0px"
					md-width="100%"
					md-display="flex"
				>
					<Text
						margin="px 0px px 0px"
						font="--headline3"
						lg-text-align="center"
						lg-font="normal 500 18px/2 &quot;Raleway&quot;, sans-serif"
						md-font="normal 500 16px/2 &quot;Raleway&quot;, sans-serif"
						md-max-width="500px"
						xs-font="normal 500 12px/2 &quot;Raleway&quot;, sans-serif"
						xs-margin="px 0px px 0px"
						xs-padding="0px 35px 0px 35px"
						xs-width="100%"
						xs-max-width="100%"
						xs-text-align="center"
					>
						Наша команда{" "}
						<Strong>
							uKit Group
						</Strong>
						{" "}это более 100 молодых и увлеченных своим делом человек.
						<br />
						<br />
						Наш штат постоянно расширяется и мы будем рады видеть тебя частью нашей дружной команды!{"\n\n "}
					</Text>
				</Box>
			</Box>
			<Box
				quarkly-title="Header"
				display="flex"
				flex-direction="row"
				max-width="none"
				justify-content="space-between"
				lg-margin="0px 110px 0px 100px"
			/>
		</Section>
		<Section
			id="skills"
			quarkly-title="Skills"
			flex-direction="column"
			justify-content="center"
			align-items="center"
			padding="156px 0 100px 0"
			background="--bgc"
			position="relative"
			lg-padding="50px 0 50px 0"
			md-padding="50px 0 50px 0"
			xs-overflow-x="hidden"
			xs-overflow-y="hidden"
			md-overflow-x="hidden"
			md-overflow-y="hidden"
		>
			<Override
				slot="SectionContent"
				width="1520px"
				max-width="1520px"
				lg-width="100%"
				lg-margin="0px 50px 0px 50px"
				xs-margin="0px 25px 0px 25px"
			/>
			<Image
				width="438px"
				height="159px"
				src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/White-in-Basic2%201.png?v=2021-05-31T22:18:27.716Z"
				position="absolute"
				bottom="auto"
				left="0px"
				right="auto"
				top="27px"
				alt="thmb_up"
				title="thmb_up"
				lg-top="-9px"
				lg-right="auto"
				lg-bottom="auto"
				lg-left="-112px"
				lg-width="370.0587777777778px"
				lg-height="124.06622222222222px"
				md-bottom="auto"
				md-height="80.89388947368421px"
				md-left="-119px"
				md-right="auto"
				md-top="0px"
				md-width="225.81673684210526px"
				sm-bottom="1292.12px"
				sm-left="-57px"
				sm-right="659.469px"
				sm-top="16px"
				sm-height="58.875px"
				sm-width="164.531px"
				xs-bottom="auto"
				xs-left="-22px"
				xs-right="auto"
				xs-top="0px"
				xs-height="36.875px"
				xs-width="106.51599999999999px"
			/>
			<Box display="flex" flex-direction="column" justify-content="center" align-items="center">
				<Text
					font="--headline2"
					margin="0px 0px 0px 0px"
					color="--text"
					md-font="normal 700 40px/1.2 &quot;Raleway&quot;, sans-serif"
					sm-font="normal 700 35px/1.2 &quot;Raleway&quot;, sans-serif"
					xs-font="normal 700 22px/1.2 &quot;Raleway&quot;, sans-serif"
				>
					Ты Нам Подойдешь Если
				</Text>
				<Box
					quarkly-title="skills_cards"
					display="flex"
					justify-content="space-between"
					width="100%"
					margin="130px 0px 0px 0px"
					lg-flex-direction="column"
					lg-align-items="center"
					sm-margin="100px 0px 0px 0px"
				>
					<Box
						position="relative"
						quarkly-title="skill_card"
						width="446px"
						height="355px"
						border-radius="20px"
						box-shadow="--skillsCardShadow"
						lg-max-width="1012px"
						lg-width="100%"
						lg-margin="0px 0px 70px 0px"
						md-max-width="none"
						md-width="446px"
						md-height="355px"
						xs-width="100%"
						xs-height="265px"
						xs-max-width="300px"
						sm-height="260px"
					>
						<Box
							width="70px"
							height="70px"
							border-radius="20px"
							margin="30px 0px 0px 30px"
							display="flex"
							justify-content="center"
							align-items="center"
							position="absolute"
							bottom="auto"
							left="0px"
							right="auto"
							top="-60px"
							background="--skillsCard1"
							box-shadow="--skillsShadow1"
							quarkly-title="icon"
							lg-width="100px"
							lg-height="100px"
							md-width="70px"
							md-height="70px"
							md-top="-60px"
							md-left={0}
							md-bottom="auto"
							md-right="auto"
							xs-left="84px"
						>
							<Icon category="fi" icon={FiFigma} color="--buttonText" size="34px" />
						</Box>
						<Box
							display="flex"
							align-items="flex-start"
							margin="90px 0px 0px 0px"
							padding="0px 0px 0px 30px"
							lg-margin="125px 0px 0px 0px"
							lg-max-width="771px"
							lg-width="100%"
							lg-justify-content="center"
							md-margin="90px 0px 0px 0px"
						>
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-max-width="771px"
								lg-width="100%"
								md-max-width="300p"
								md-width="300p"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Уверенно работаешь в{" "}
								<Span
									font-weight="normal"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									<Strong width="300px">
										Figma
									</Strong>
								</Span>
							</Text>
						</Box>
						<Box display="flex" align-items="flex-start" margin="40px 0px 0px 0px" padding="0px 0px 0px 30px">
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-max-width="771px"
								lg-width="100%"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Делаешь привлекательный, выразительный и современный{" "}
								<br />
								web-дизайн
							</Text>
						</Box>
					</Box>
					<Box
						position="relative"
						quarkly-title="skill_card"
						width="446px"
						height="355px"
						border-radius="20px"
						box-shadow="--skillsCardShadow"
						lg-max-width="1012px"
						lg-width="100%"
						lg-margin="0px 0px 70px 0px"
						md-width="446px"
						md-height="355px"
						md-max-width="none"
						xs-width="100%"
						xs-max-width="300px"
						xs-height="325px"
						sm-height="300px"
					>
						<Box
							width="70px"
							height="70px"
							border-radius="20px"
							margin="30px 0px 0px 30px"
							display="flex"
							justify-content="center"
							align-items="center"
							position="absolute"
							top="-60px"
							right="auto"
							bottom="auto"
							left="0px"
							quarkly-title="icon"
							background="--skillsCard2"
							box-shadow="--skillsShadow2"
							lg-width="100px"
							lg-height="100px"
							md-height="70px"
							md-width="70px"
							xs-left="84px"
						>
							<Icon category="fi" icon={FiAlignLeft} color="--buttonText" size="34px" />
						</Box>
						<Box
							display="flex"
							align-items="flex-start"
							margin="90px 0px 0 0px"
							padding="0px 0px 0px 30px"
							lg-margin="125px 0px 0px 0px"
							md-margin="90px 0px 0 0px"
						>
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Базовые навыки в копирайтинге
							</Text>
						</Box>
						<Box display="flex" align-items="flex-start" margin="40px 0px 0 0px" padding="0px 0px 0px 30px">
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Грамотный русский язык
							</Text>
						</Box>
						<Box display="flex" align-items="flex-start" margin="40px 0px 0 0px" padding="0px 0px 0px 30px">
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Ориентируешься в современных трендах веб-индустрии
							</Text>
						</Box>
					</Box>
					<Box
						position="relative"
						quarkly-title="skill_card"
						width="446px"
						height="355px"
						border-radius="20px"
						box-shadow="--skillsCardShadow"
						lg-max-width="1012px"
						lg-width="100%"
						lg-margin="0px 0px 70px 0px"
						md-width="446px"
						md-height="355px"
						xs-width="100%"
						xs-max-width="300px"
						xs-height="305px"
					>
						<Box
							width="70px"
							height="70px"
							border-radius="20px"
							margin="30px 0px 0px 30px"
							display="flex"
							justify-content="center"
							align-items="center"
							position="absolute"
							top="-60px"
							right="auto"
							bottom="auto"
							left="0px"
							quarkly-title="icon"
							box-shadow="--skillsShadow3"
							background="--skillsCard3"
							lg-width="100px"
							lg-height="100px"
							md-height="70px"
							md-width="70px"
							xs-left="84px"
						>
							<Icon category="fi" icon={FiCode} color="--buttonText" size="34px" />
						</Box>
						<Box
							display="flex"
							align-items="flex-start"
							margin="90px 0px 0 0px"
							padding="0px 0px 0px 30px"
							lg-margin="125px 0px 0px 0px"
							md-margin="90px 0px 0 0px"
						>
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Базовые знания HTML, CSS, JavaSсript, React
							</Text>
						</Box>
						<Box display="flex" align-items="flex-start" margin="40px 0px 0 0px" padding="0px 0px 0px 30px">
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Опыт верстки сайтов
							</Text>
						</Box>
						<Box display="flex" align-items="flex-start" margin="40px 0px 0 0px" padding="0px 0px 0px 30px">
							<Icon
								category="go"
								icon={GoPrimitiveDot}
								color="#F99B83"
								size="20px"
								lg-margin="5px 0px 0px 0px"
								xs-margin="1px 0px 0px 0px"
							/>
							<Text
								font="--base"
								color="--text2"
								margin="0px 0px 0px 15px"
								width="300px"
								lg-font="normal 600 20px/1.5 &quot;Raleway&quot;, sans-serif"
								lg-width="100%"
								lg-max-width="700px"
								md-width="300px"
								md-font="normal 600 17px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
								xs-padding="0px 30px 0px 0px"
							>
								Опыт сборки сайтов на конструкторах
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			id="order"
			quarkly-title="Order"
			margin="0px 0 0 0"
			padding="100px 0 100px 0"
			position="relative"
			overflow-y="hidden"
			overflow-x="hidden"
			lg-padding="50px 0 50px 0"
			md-padding="50px 0 50px 0"
		>
			<Override
				slot="SectionContent"
				width="1520px"
				max-width="1520px"
				flex-direction="row"
				justify-content="space-between"
				lg-padding="0px 50px 0px 50px"
				xs-padding="0px 0px 0px 0px"
				xs-margin="0px 25px 0px 25px"
			/>
			<Box quarkly-title="order_left">
				<Text
					color="--text"
					font="--headline2"
					quarkly-title="order_title"
					md-font="normal 700 40px/1.2 &quot;Raleway&quot;, sans-serif"
					sm-font="normal 700 35px/1.2 &quot;Raleway&quot;, sans-serif"
					xs-text-align="center"
					xs-font="normal 700 22px/1.2 &quot;Raleway&quot;, sans-serif"
				>
					Оставь заявку
				</Text>
				<Text
					color="rgba(50, 50, 50, 0.7)"
					font="--base"
					width="480px"
					margin="40px 0px 60px 0px"
					md-font="normal 600 16px/1.5 &quot;Raleway&quot;, sans-serif"
					xs-text-align="center"
					xs-font="normal 600 12px/1.5 &quot;Raleway&quot;, sans-serif"
					xs-width="100%"
				>
					Если ты уверен в своих способностях и готов к новому опыту в сфере дизайна
				</Text>
				<Box xs-display="flex" xs-justify-content="center" xs-align-items="center">
					<Components.QuarklycommunityKitFormspree
						color="--text"
						completeText="Спасибо за заявку, мы свяжемся с вами в ближайшее время!"
						display="flex"
						endpoint="https://formspree.io/f/moqydnrr"
						errorMessage="Упс..что то не так..."
						flex-direction="column"
						font="--headline3"
						width="351px"
						xs-align-items="center"
						xs-justify-content="center"
					>
						<Input
							border-width="0 0 3px 0"
							border-style="solid"
							border-color="#FD6400"
							padding="6px 16px 15px 0px"
							border-radius="2px"
							width="351px"
							color="rgba(253, 100, 0, 0.5)"
							font="--base"
							margin="0px 0px 40px 0px"
							placeholder="Имя"
							type="text"
							placeholder-color="rgba(253, 100, 0, 0.5)"
							required
							name="Имя"
							hover-color="rgba(253, 100, 0, 0.5)"
							focus-color="rgba(253, 100, 0, 0.5)"
							required-color="rgba(253, 100, 0, 0.5)"
							invalid-color="rgba(253, 100, 0, 0.5)"
							disabled-color="rgba(253, 100, 0, 0.5)"
							hover-border-color="#FD6400"
							focus-border-color="#FD6400"
							required-border-color="#fd0000"
							placeholder-border-color="#FD6400"
							disabled-border-color="#FD6400"
							invalid-border-color="#FD6400"
							xs-width="250px"
							xs-max-width="250xp"
							xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
							xs-border-width="0 0 2px 0"
						/>
						<Input
							border-width="0 0 3px 0"
							border-style="solid"
							border-color="#FD6400"
							padding="6px 16px 15px 0px"
							border-radius="2px"
							width="351px"
							color="rgba(253, 100, 0, 0.5)"
							font="--base"
							margin="0px 0px 40px 0px"
							type="email"
							disabled={false}
							as="input"
							placeholder="E-mail"
							placeholder-color="rgba(253, 100, 0, 0.5)"
							required
							name="E-mail"
							hover-color="rgba(253, 100, 0, 0.5)"
							focus-color="rgba(253, 100, 0, 0.5)"
							required-color="rgba(253, 100, 0, 0.5)"
							invalid-color="rgba(253, 100, 0, 0.5)"
							disabled-color="rgba(253, 100, 0, 0.5)"
							hover-border-color="#FD6400"
							focus-border-color="#FD6400"
							required-border-color="#fd0000"
							invalid-border-color="#FD6400"
							placeholder-border-color="#FD6400"
							disabled-border-color="#FD6400"
							xs-width="250px"
							xs-border-width="0 0 2px 0"
							xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
						/>
						<Input
							defaultValue="Имя"
							border-width="0 0 3px 0"
							border-style="solid"
							border-color="#FD6400"
							padding="6px 16px 15px 0px"
							border-radius="2px"
							width="351px"
							color="rgba(253, 100, 0, 0.5)"
							font="--base"
							margin="0px 0px 40px 0px"
							type="text"
							placeholder="Ссылка на портфолио"
							placeholder-color="rgba(253, 100, 0, 0.5)"
							required
							name="Портфолио"
							hover-color="rgba(253, 100, 0, 0.5)"
							focus-color="rgba(253, 100, 0, 0.5)"
							required-color="rgba(253, 100, 0, 0.5)"
							invalid-color="rgba(253, 100, 0, 0.5)"
							disabled-color="rgba(253, 100, 0, 0.5)"
							hover-border-color="#FD6400"
							focus-border-color="#FD6400"
							required-border-color="#fd0000"
							placeholder-border-color="#FD6400"
							invalid-border-color="#FD6400"
							disabled-border-color="#FD6400"
							xs-width="250px"
							xs-border-width="0 0 2px 0"
							xs-font="normal 600 14px/1.5 &quot;Raleway&quot;, sans-serif"
						/>
						<Button
							width="307px"
							height="75px"
							font="--button"
							color="--buttonText"
							background="--button"
							border-radius="12px"
							type="submit"
							hover-background="#f07d5f"
							hover-transition="--all"
							transition="--all"
							xs-width="100%"
							xs-font="normal 500 20px/36px &quot;Raleway&quot;, sans-serif"
							xs-height="55px"
						>
							Оставить заявку
						</Button>
					</Components.QuarklycommunityKitFormspree>
				</Box>
			</Box>
			<Box quarkly-title="order_right" position="relative" xs-display="none">
				<Image
					width="730px"
					height="auto"
					src="https://uploads.quarkly.io/60b5086a46e2ba001e72d10d/images/Comp_5.gif?v=2021-05-31T23:08:56.860Z"
					position="relative"
					z-index="1"
					padding="100px 0px 0px 0px"
					alt="ukit_gif"
					title="ukit_gif"
					md-bottom="79px"
					md-left="-280px"
					md-position="absolute"
					md-right="auto"
					md-top="auto"
					md-height="233.875px"
					md-width="328.9473684210526px"
					sm-bottom="71px"
					sm-height="124.188px"
					sm-left="auto"
					sm-right="-89px"
					sm-top="auto"
					sm-width="191.02536842105263px"
					sm-display="none"
				/>
				<Box
					width="703px"
					height="703px"
					color="#FFD482"
					border-radius="999px"
					background="#FFD482"
					position="absolute"
					bottom="-330px"
					left="auto"
					right="-383px"
					top="auto"
					z-index="0"
					md-bottom="-389px"
					md-left="auto"
					md-right="-504px"
					md-top="auto"
					sm-bottom="-450px"
					sm-left="auto"
					sm-right="-618px"
					sm-top="auto"
					xs-display="none"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});