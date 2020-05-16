import React, { useState } from 'react';
import { Title,Form,UserInfos } from './styled';
import api from '../../services/api';

function Dashboard() {

  const [users, setUsers] = useState("");
  const [usersInfo, setUsersInfo] = useState();

  async function handleSearchUser(e) {
    e.preventDefault();
    const response = await api.get(`/users/${users}`);
    console.log(response);
    setUsersInfo(response.data);
  }
  return (
    <>
      <Title>Git App </Title>
      <Form onSubmit={handleSearchUser}>
        <input
        type="text"
        placeholder="Perfil do Git"
        onChange ={(e) => setUsers(e.target.value)}
        value={users}
        />
        <button><i class="fas fa-search"></i></button>
      </Form>
      {usersInfo && (
        <UserInfos>
          <a href={usersInfo.html_url}>
            <img src={usersInfo.avatar_url} alt="Foto do usuário" />
            <div>
              <p>
                <strong>{usersInfo.name}</strong> /{usersInfo.login}
              </p>
              <p>{usersInfo.bio}</p>
            </div>
          </a>
        </UserInfos>
      )}
    </>
  );
}

export default Dashboard;
