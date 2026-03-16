import { Route, Switch } from 'react-router-dom';

import AuthLayout from '../components/layouts/AuthLayout';
import DefaultLayout from '../components/layouts/DefaultLayout';

import SignIn from '../components/Signin';
import ProtectedRoute from './ProtectedRoute';
import AddStaff from '../components/AddStaff';
import StaffView from '../components/StaffView';
import StaffProfiles from '../components/StaffProfiles';

const AllRoutes = () => {
    return (
        <Switch>
            <ProtectedRoute
                exact path="/"
                layout={AuthLayout}
                component={SignIn} />

            <ProtectedRoute
                exact path='/signin'
                layout={AuthLayout}
                component={SignIn} />

            <ProtectedRoute
                exact path='/staffs'
                layout={DefaultLayout}
                component={StaffProfiles} />

            <ProtectedRoute
                exact path="/add-staff"
                layout={DefaultLayout}
                component={AddStaff} />

            <ProtectedRoute
                exact path="/staff-view"
                layout={DefaultLayout}
                component={StaffView} />
        </Switch>
    )

};

export default AllRoutes
