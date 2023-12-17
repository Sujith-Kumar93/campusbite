import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMenus } from '../actions/menuActions'
import Menu from '../components/Menu'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Homescreen() {

    const dispatch = useDispatch();

    const menusstate = useSelector(state => state.getAllMenusReducer);

    const { menus, error, loading } = menusstate;

    useEffect(() => {
        dispatch(getAllMenus())
    }, [dispatch])
    return (
        <div>
            <div className='row justify-content-center'>

                {loading ? (
                <Loading/>
                ) : error ? (
                <Error error='Something went wrong'/>
                ) : (
                    menus.map(menu => {
                        return <div className='col-md-3 m-3' key = {menu._id}>
                            <div>
                                <Menu menu={menu} />
                            </div>
                        </div>
                    })
                )}


            </div>
        </div>
    );
}
