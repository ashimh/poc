import React from 'react';
import {Routes, Route} from 'react-router-dom';
import UsersTable from '../table/usersTable';
import NoPageFound from '../errors/nopagefound';
import UserUpdateForm from '../form/userupdateform';

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<UsersTable />}></Route>
        <Route path='/update' element={<UserUpdateForm />}></Route>
        <Route path='*' element={<NoPageFound msg={"Page does not exists, Redirecting to home page"}/>}></Route>
    </Routes>
  )
}

export default CustomRoutes