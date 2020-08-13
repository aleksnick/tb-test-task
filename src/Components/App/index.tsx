import React, {useEffect} from 'react';
import {IUser} from 'src/@types/user';

interface IProps {
  user: IUser | null;
}

export default function App({user}: IProps) {
  useEffect(() => {
    alert(JSON.stringify(user));
  }, []);
  if (!user) {
    return null;
  }
  return <p>{`id: ${user.id}, name: ${user.name}, age: ${user.age}`}</p>;
}
