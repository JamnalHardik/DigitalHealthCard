// user calls

export const getAllUserForms = async (userId) => {    
    return await fetch(`http://localhost:8000/api/user/${userId}`, {
        method: "GET"        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const getHospitalById = async (hospitalId) => {    
    return await fetch(`http://localhost:8000/api/hospital/${hospitalId}`, {
        method: "GET"        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}