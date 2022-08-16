import { useSelector, useDispatch } from 'react-redux';

function logOut() {
    const dispatch = useDispatch()
    dispatch(requestLogout())

    const { isSuccess, isError, message } = useSelector((state) => state.auth)
    let result = false
    if (isError) {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000
        })
        result = false
    }
    if (isSuccess) {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000
        })
        result = true
    }
    return result
}

export default logOut;