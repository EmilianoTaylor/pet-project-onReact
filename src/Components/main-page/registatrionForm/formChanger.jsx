import Button from "../../Button/button"

export default function FormChanger ({active, onChange}) {
	return (
	<div>
		<Button type="button" className="formInp" isActive={active == "registr"} onClick={() => onChange("registr")}>Зарегистрироваться</Button>
		<Button type="button" className="formInp" isActive={active == "login"} onClick={() => onChange("login")}>Войти</Button>
	</div>	
	)
}