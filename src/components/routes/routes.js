import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UsersTable from '../table/usersTable';
import NoPageFound from '../errors/nopagefound';
import UserUpdateForm from '../form/userupdateform';
import UserAddForm from '../form/useraddform';

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<UsersTable />}></Route>
        <Route path='/update' element={<UserUpdateForm />}></Route>
        <Route path='/add' element={<UserAddForm />}></Route>
        <Route path='*' element={<NoPageFound msg={"Page does not exists, Redirecting to home page"}/>}></Route>
    </Routes>
  )
}

export default CustomRoutes