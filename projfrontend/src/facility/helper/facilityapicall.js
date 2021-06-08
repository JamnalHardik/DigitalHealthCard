// user calls

export const getAllUserForms = (userId) => {
    return fetch(`localhost:8000/api/user/${userId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}