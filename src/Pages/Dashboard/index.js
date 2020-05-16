import React, { useState,useEffect } from 'react';
import { Title,Form,UserInfos, Actions } from './styled';
import { FaTrash } from "react-icons/fa";
import api from '../../services/api';

function Dashboard() {

  const [users, setUsers] = useState("");
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(()=> {
    if(usersInfo !== []){
      const userStorage = localStorage.getItem("@users");
      const parseUser = JSON.parse(userStorage);
      setUsersInfo(parseUser);
    }
  },[]);


  async function handleSearchUser(e) {
    e.preventDefault();
    const response = await api.get(`/users/${users}`);
    console.log(response);
    let parseUser
    if(usersInfo) {
      setUsersInfo([... usersInfo, response.data]);
      parseUser = JSON.stringify([... usersInfo, response.data]);
      localStorage.setItem("@users", parseUser);

    } else {
      setUsersInfo([response.data]);
      parseUser = JSON.stringify([response.data]);
      localStorage.setItem("@users", parseUser);
    }

    setUsers("");

  }

  function handleDelete(id) {
    const userIndex = usersInfo.findIndex((e, i) => {
      if (e.id === e) {
        return i;
      }
    })

    usersInfo.splice(userIndex, 1);

    let parseUser = JSON.stringify([...usersInfo])
    localStorage.setItem('@users', parseUser);
    setUsersInfo([...usersInfo]);

    console.log('Usuarios', usersInfo);
    console.log('id', id);
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
        <button><i className="fas fa-search"></i></button>
      </Form>
      {usersInfo && usersInfo.map(userInfo =>
        <UserInfos key={userInfo.id}>
          <a href={userInfo.html_url}>
            <img src={userInfo.avatar_url} alt="Foto do usuário" />
            <div>
              <p>
                <strong>{userInfo.name}</strong> /{userInfo.login}
              </p>
              <p>{userInfo.bio}</p>
            </div>
          </a>
          <Actions>
            <FaTrash onClick={() => handleDelete(userInfo.id)} />
          </Actions>
        </UserInfos>
      )}
    </>
  );
}

export default Dashboard;
