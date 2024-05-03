function getUserById(id) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            const users = [
                {id:1, name: 'Roberto'},
                {id:2, name: 'Lucia'},
                {id:3, name: 'Toninho'},
                {id:4, name: 'Tinoco'}
            ];
            const user = users.find(user => user.id === id);
            if(user) {
                resolve(user);
            } else {
                reject(new Error('Usuario não encontrado'))
            }
        }, Math.floor(Math.round() * 10000))
    })
}

async function fetchUser(id) {
    try{
        const user = await getUserById(id);
        console.log('User found:',user);
    } catch (error) {
        console.log('Problema ao encontrar usuario,',error.message);
    }
}

fetchUser(2);
fetchUser(6);
