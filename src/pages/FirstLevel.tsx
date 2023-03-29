import React from "react";

type Props = {
	username: string
}
type NewProps = {
	color: string
}

const Hoc = <T extends Props>(WrapperComponent: React.ComponentType<T>, color: string = 'blue') => {
	const newProps = { color };
	return (props: T) => {
		return <WrapperComponent {...props}></WrapperComponent>
	}
}

const Demo = <T extends Props>(props: T) => <p>{props.username}</p>

const First = () => {
	const Com = Hoc(Demo);
	return <div>
		<p>一级页面</p>
		<Com username={"xrx"} />
	</div>
}

export default First;