class User {
	constructor(props) {
		this.name = props.name;
	}

	firstName = "";
	patronymicName = "";
	lastName = "";
	dob = "";
	mob = "";
	yob = "1979";

	set name(newName) {
		const nameRow = newName.split(" ");
		this.firstName = nameRow[0];
		this.patronymicName = nameRow[1];
		this.lastName = nameRow[2];
	}

	get name() {
		return `${this.firstName} ${this.lastName}`;
	}

	get fio() {
		return `${this.lastName} ${this.firstName.substring(0, 1) + "."}${this.patronymicName.substring(0, 1) + "."}`;
	}
}

const registeredUser = new User({
	name: "Ivan Fedorovich Petrov",
});

console.log(registeredUser.fio);
