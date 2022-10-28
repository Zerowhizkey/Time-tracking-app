import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { v4 as uuid } from "uuid";
import { TiDelete } from "react-icons/ti";
import * as S from "./Projects.styles";

const Users = () => {
	const { users, addUser, deleteUser } = useProjects();
	const [input, setInput] = useState("");

	const handleClickAdd = async () => {
		if (!input.trim()) return;
		const userData = {
			id: uuid(),
			name: input,
		};
		if (users.find((user) => user.name === userData.name)) return;
		await addUser(userData);
		setInput("");
	};

	const handleDelete = async (id) => {
		await deleteUser(id);
	};

	const handleInput = (e) => {
		setInput(e.target.value);
	};
	return (
		<S.Container>
			<S.InputContainer>
				<S.InputText
					type="text"
					value={input}
					onChange={handleInput}
					placeholder="Write here ...."
				/>

				<S.Button onClick={handleClickAdd}>Add a user</S.Button>
			</S.InputContainer>
			<S.ProjectContainer>
				<S.Title>Users</S.Title>
				<S.ProjectList>
					{users &&
						users.map((user) => (
							<S.ProjectItem key={user.id}>
								<TiDelete
									size={25}
									style={{
										color: " #da22ff",
									}}
									onClick={() => handleDelete(user.id)}
								/>
								<p style={{ width: "50px" }}>{user.name}</p>
							</S.ProjectItem>
						))}
				</S.ProjectList>
			</S.ProjectContainer>
		</S.Container>
	);
};

export default Users;
